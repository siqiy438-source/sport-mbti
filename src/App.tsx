import { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import PersonalityDetail from "./pages/PersonalityDetail";
import Gallery from "./pages/Gallery";
import { navigate, useRoute } from "./lib/router";
import type { Personality } from "./types";

const STORAGE_KEY = "smbti_result_v1";

export default function App() {
  const route = useRoute();
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

  // /result 但是没有结果 → 跳到 quiz
  useEffect(() => {
    if (route.name === "result" && !result) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) navigate({ name: "quiz" });
    }
  }, [route, result]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      {route.name === "landing" && (
        <Landing
          lastResult={result}
          onStart={() => navigate({ name: "quiz" })}
          onViewResult={() => navigate({ name: "result" })}
          onPickType={(id) => navigate({ name: "type", id })}
          onViewGallery={() => navigate({ name: "gallery" })}
        />
      )}
      {route.name === "quiz" && (
        <Quiz
          onDone={(p) => {
            setResult(p);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
            navigate({ name: "result" });
          }}
          onCancel={() => navigate({ name: "landing" })}
        />
      )}
      {route.name === "result" && result && (
        <Result
          personality={result}
          onRestart={() => {
            localStorage.removeItem(STORAGE_KEY);
            setResult(null);
            navigate({ name: "quiz" });
          }}
          onHome={() => navigate({ name: "landing" })}
        />
      )}
      {route.name === "type" && <PersonalityDetail id={route.id} />}
      {route.name === "gallery" && (
        <Gallery
          onPickType={(id) => navigate({ name: "type", id })}
          onHome={() => navigate({ name: "landing" })}
          onStart={() => navigate({ name: "quiz" })}
        />
      )}
    </div>
  );
}
