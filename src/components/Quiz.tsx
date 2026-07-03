"use client";

import { useState, useCallback } from "react";
import type { QuizItem } from "@/data/quiz-data";

interface QuizProps {
  questions: QuizItem[];
  title?: string;
}

export function Quiz({ questions, title = "Test dig selv" }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const current = questions[currentIndex];

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (showResult) return;
      setSelectedOption(optionIndex);
      setShowResult(true);
      const isCorrect = current.options[optionIndex].correct;
      if (isCorrect) {
        setScore((s) => s + 1);
      }
      setAnswers((a) => [...a, isCorrect]);
    },
    [showResult, current]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  }, []);

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    const emoji = percent === 100 ? "🎉" : percent >= 67 ? "👏" : percent >= 34 ? "💪" : "📚";
    const message =
      percent === 100
        ? "Perfekt! Du mestrer stoffet!"
        : percent >= 67
          ? "Flot klaret! Du er godt med."
          : percent >= 34
            ? "Godt forsøg! Læs op og prøv igen."
            : "Øv dig lidt mere — du kan godt!";

    return (
      <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-5 sm:p-6">
        <div className="text-center space-y-4">
          <div className="text-4xl">{emoji}</div>
          <h3 className="text-xl font-bold text-foreground">
            {score} af {questions.length} rigtige
          </h3>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 flex-wrap">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  correct ? "bg-green-500" : "bg-red-400"
                }`}
                title={`Spørgsmål ${i + 1}: ${correct ? "Rigtigt" : "Forkert"}`}
              />
            ))}
          </div>

          <p className="text-muted">{message}</p>

          <button
            onClick={handleRestart}
            className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Prøv igen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-primary/20 bg-primary-light/30 p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <span className="text-lg">🧠</span> {title}
        </h3>
        <span className="text-sm text-muted font-medium">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <p className="text-foreground font-medium">{current.question}</p>

      <div className="space-y-2">
        {current.options.map((option, i) => {
          let style = "border-border bg-white hover:border-primary/50 hover:bg-primary-light/20 cursor-pointer";

          if (showResult) {
            if (option.correct) {
              style = "border-green-500 bg-green-50 ring-1 ring-green-500/20";
            } else if (i === selectedOption && !option.correct) {
              style = "border-red-400 bg-red-50 ring-1 ring-red-400/20";
            } else {
              style = "border-border bg-white/50 opacity-60";
            }
          } else if (i === selectedOption) {
            style = "border-primary bg-primary-light";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 ${style} ${showResult ? "cursor-default" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                    showResult && option.correct
                      ? "bg-green-500 text-white"
                      : showResult && i === selectedOption && !option.correct
                        ? "bg-red-400 text-white"
                        : "bg-surface text-muted border border-border"
                  }`}
                >
                  {showResult && option.correct
                    ? "✓"
                    : showResult && i === selectedOption && !option.correct
                      ? "✗"
                      : String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm sm:text-base">{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div
          className={`rounded-lg p-4 border ${
            current.options[selectedOption!]?.correct
              ? "bg-green-50 border-green-200"
              : "bg-amber-50 border-amber-200"
          }`}
        >
          <p className="text-sm font-medium mb-1">
            {current.options[selectedOption!]?.correct ? "✅ Rigtigt!" : "❌ Ikke helt — her er forklaringen:"}
          </p>
          <p className="text-sm text-muted">{current.explanation}</p>
        </div>
      )}

      {showResult && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {currentIndex + 1 >= questions.length ? "Se resultat" : "Næste spørgsmål →"}
          </button>
        </div>
      )}
    </div>
  );
}
