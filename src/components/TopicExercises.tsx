"use client";

import { useState } from "react";
import { Quiz } from "./Quiz";
import { PracticeExercise } from "./PracticeExercise";
import { quizData } from "@/data/quiz-data";

interface TopicExercisesProps {
  topicId: string;
}

export function TopicExercises({ topicId }: TopicExercisesProps) {
  const [activeTab, setActiveTab] = useState<"quiz" | "exercises">("quiz");
  const data = quizData[topicId];

  if (!data) return null;

  const hasQuiz = data.quiz.length > 0;
  const hasExercises = data.exercises.length > 0;

  if (!hasQuiz && !hasExercises) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">Test dig selv</h2>

      {/* Tab switcher */}
      {hasQuiz && hasExercises && (
        <div className="flex gap-1 mb-4 bg-surface rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "quiz"
                ? "bg-white shadow-sm text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            🧠 Quiz
          </button>
          <button
            onClick={() => setActiveTab("exercises")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "exercises"
                ? "bg-white shadow-sm text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            ✏️ Øvelser
          </button>
        </div>
      )}

      {activeTab === "quiz" && hasQuiz && <Quiz questions={data.quiz} />}
      {activeTab === "exercises" && hasExercises && (
        <PracticeExercise exercises={data.exercises} />
      )}
    </section>
  );
}
