import { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import type { Personality } from "./types";

type Stage = "landing" | "quiz" | "result";

const STORAGE_KEY = "smbti_result_v1";

export default function App() {
  const [stage, setStage] = useState<Stage>("landing");
  const [result, setResult] = useState<Personality | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setResult(JSON.parse(stored) as Personality);
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg text-ink">
      {stage === "landing" && (
        <Landing
          lastResult={result}
          onStart={() => setStage("quiz")}
          onViewResult={() => setStage("result")}
        />
      )}
      {stage === "quiz" && (
        <Quiz
          onDone={(p) => {
            setResult(p);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
            setStage("result");
          }}
          onCancel={() => setStage("landing")}
        />
      )}
      {stage === "result" && result && (
        <Result
          personality={result}
          onRestart={() => {
            localStorage.removeItem(STORAGE_KEY);
            setResult(null);
            setStage("quiz");
          }}
          onHome={() => setStage("landing")}
        />
      )}
    </div>
  );
}
