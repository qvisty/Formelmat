"use client";

import { useState, useCallback } from "react";
import type { ExerciseItem } from "@/data/quiz-data";

interface PracticeExerciseProps {
  exercises: ExerciseItem[];
  title?: string;
}

export function PracticeExercise({
  exercises,
  title = "Øvelser",
}: PracticeExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const current = exercises[currentIndex];

  const normalizeAnswer = (answer: string) =>
    answer
      .trim()
      .toLowerCase()
      .replace(/,/g, ".")
      .replace(/\s+/g, " ");

  const handleCheck = useCallback(() => {
    const normalized = normalizeAnswer(userAnswer);
    const expected = normalizeAnswer(current.answer);

    if (normalized === expected) {
      setResult("correct");
      setCompletedCount((c) => c + 1);
    } else {
      setResult("incorrect");
      setAttempts((a) => a + 1);
    }
  }, [userAnswer, current.answer]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex((i) => i + 1);
      setUserAnswer("");
      setShowHint(false);
      setResult(null);
      setAttempts(0);
    }
  }, [currentIndex, exercises.length]);

  const handleRetry = useCallback(() => {
    setUserAnswer("");
    setResult(null);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setUserAnswer("");
    setShowHint(false);
    setResult(null);
    setCompletedCount(0);
    setAttempts(0);
  }, []);

  const allDone = currentIndex === exercises.length - 1 && result === "correct";

  return (
    <div className="rounded-xl border-2 border-secondary/30 bg-amber-50/50 p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <span className="text-lg">✏️</span> {title}
        </h3>
        <span className="text-sm text-muted font-medium">
          {completedCount} / {exercises.length} løst
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 flex-wrap">
        {exercises.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i < currentIndex || (i === currentIndex && result === "correct")
                ? "bg-green-500"
                : i === currentIndex
                  ? "bg-primary"
                  : "bg-border"
            }`}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg p-4 border border-border">
        <p className="text-foreground font-medium mb-4">{current.question}</p>

        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && userAnswer.trim() && !result) {
                  handleCheck();
                }
              }}
              placeholder="Skriv dit svar..."
              disabled={result === "correct"}
              className={`w-full px-4 py-2.5 rounded-lg border-2 text-base transition-colors outline-none ${
                result === "correct"
                  ? "border-green-500 bg-green-50"
                  : result === "incorrect"
                    ? "border-red-400 bg-red-50"
                    : "border-border focus:border-primary bg-white"
              }`}
            />
          </div>
          {current.unit && (
            <span className="text-muted font-medium pb-2.5">{current.unit}</span>
          )}
        </div>

        {/* Feedback */}
        {result === "correct" && (
          <div className="mt-3 flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            <span className="text-lg">✅</span>
            <span className="text-sm font-medium">Rigtigt! Godt klaret!</span>
          </div>
        )}

        {result === "incorrect" && (
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              <span className="text-lg">❌</span>
              <span className="text-sm font-medium">
                Ikke helt rigtigt — prøv igen!
              </span>
            </div>
            {attempts >= 2 && (
              <div className="text-sm text-muted bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                <span className="font-medium">💡 Svaret er: </span>
                {current.answer}
                {current.unit ? ` ${current.unit}` : ""}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hint */}
      {!showHint && result !== "correct" && (
        <button
          onClick={() => setShowHint(true)}
          className="text-sm text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-1"
        >
          <span>💡</span> Vis hint
        </button>
      )}
      {showHint && result !== "correct" && (
        <div className="text-sm text-muted bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
          <span className="font-medium">Hint:</span> {current.hint}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center">
        <div />
        <div className="flex gap-2">
          {result === "incorrect" && (
            <button
              onClick={handleRetry}
              className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-surface transition-colors"
            >
              Prøv igen
            </button>
          )}
          {result === "correct" && !allDone && (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Næste øvelse →
            </button>
          )}
          {!result && (
            <button
              onClick={handleCheck}
              disabled={!userAnswer.trim()}
              className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Tjek svar
            </button>
          )}
        </div>
      </div>

      {/* All done */}
      {allDone && (
        <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
          <div className="text-2xl">🏆</div>
          <p className="font-bold text-foreground">
            Du har løst alle {exercises.length} øvelser!
          </p>
          <button
            onClick={handleRestart}
            className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start forfra
          </button>
        </div>
      )}
    </div>
  );
}
