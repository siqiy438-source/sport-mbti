import { useState } from "react";
import { questions as allQuestions } from "../data/questions";
import {
  applyAnswer,
  initialScores,
  matchPersonality,
} from "../lib/calculate";
import type { Personality, Question, QuestionOption } from "../types";

const QUIZ_LENGTH = 20;

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuiz(): Question[] {
  const picked = shuffle(allQuestions).slice(0, QUIZ_LENGTH);
  return picked.map((q) => ({ ...q, options: shuffle(q.options) }));
}

export default function Quiz({
  onDone,
  onCancel,
}: {
  onDone: (p: Personality) => void;
  onCancel: () => void;
}) {
  const [questions] = useState<Question[]>(buildQuiz);
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState(initialScores);
  const [picked, setPicked] = useState<number | null>(null);

  const total = questions.length;
  const q = questions[idx];
  const progress = ((idx + (picked !== null ? 1 : 0)) / total) * 100;

  function pick(opt: QuestionOption, optionIdx: number) {
    if (picked !== null) return;
    setPicked(optionIdx);
    const next = applyAnswer(scores, opt);
    setScores(next);
    window.setTimeout(() => {
      if (idx + 1 >= total) {
        const p = matchPersonality(next);
        onDone(p);
      } else {
        setIdx(idx + 1);
        setPicked(null);
      }
    }, 280);
  }

  return (
    <div className="max-w-2xl mx-auto px-5 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6 text-sm text-muted">
        <button
          onClick={onCancel}
          className="hover:text-ink transition"
          aria-label="返回"
        >
          ← 返回
        </button>
        <div>
          {idx + 1} / {total}
        </div>
      </div>

      <div className="h-1.5 bg-accentSoft rounded-full overflow-hidden mb-10">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="font-serif text-2xl md:text-3xl mb-8 leading-snug">
        {q.prompt}
      </h2>

      <div className="space-y-3">
        {q.options.map((opt, i) => {
          const isPicked = picked === i;
          return (
            <button
              key={i}
              onClick={() => pick(opt, i)}
              disabled={picked !== null}
              className={`w-full text-left px-5 py-4 rounded-2xl shadow-card border transition ${
                isPicked
                  ? "bg-accent text-white border-accent"
                  : "bg-card border-transparent hover:bg-accentSoft hover:border-accent disabled:opacity-50"
              }`}
            >
              <span
                className={`font-medium mr-2 ${isPicked ? "text-white" : "text-accent"}`}
              >
                {String.fromCharCode(65 + i)}.
              </span>
              {opt.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
