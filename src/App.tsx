import { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import PersonalityDetail from "./pages/PersonalityDetail";
import Gallery from "./pages/Gallery";
import { navigate, useRoute } from "./lib/router";
import { GenderProvider } from "./lib/gender-context";
import type { MbtiType, Personality } from "./types";

const STORAGE_KEY = "smbti_result_v2";

interface StoredResult {
  personality: Personality;
  userMbti: MbtiType;
}

export default function App() {
  const route = useRoute();
  const [stored, setStored] = useState<StoredResult | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setStored(JSON.parse(raw) as StoredResult);
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    if (route.name === "result" && !stored) {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) navigate({ name: "quiz" });
    }
  }, [route, stored]);

  return (
    <GenderProvider>
      <div className="min-h-screen bg-bg text-ink">
        {route.name === "landing" && (
        <Landing
          lastResult={stored?.personality ?? null}
          onStart={() => navigate({ name: "quiz" })}
          onViewResult={() => navigate({ name: "result" })}
          onPickType={(id) => navigate({ name: "type", id })}
          onViewGallery={() => navigate({ name: "gallery" })}
        />
      )}
      {route.name === "quiz" && (
        <Quiz
          onDone={(personality, userMbti) => {
            const next = { personality, userMbti };
            setStored(next);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            navigate({ name: "result" });
          }}
          onCancel={() => navigate({ name: "landing" })}
        />
      )}
      {route.name === "result" && stored && (
        <Result
          personality={stored.personality}
          userMbti={stored.userMbti}
          onRestart={() => {
            localStorage.removeItem(STORAGE_KEY);
            setStored(null);
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
    </GenderProvider>
  );
}
