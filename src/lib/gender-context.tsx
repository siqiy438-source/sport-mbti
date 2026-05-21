import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { loadGender, saveGender } from "./avatars";
import type { Gender } from "../types";

interface GenderContextValue {
  gender: Gender;
  setGender: (g: Gender) => void;
  toggleGender: () => void;
}

const GenderContext = createContext<GenderContextValue>({
  gender: "female",
  setGender: () => {},
  toggleGender: () => {},
});

export function GenderProvider({ children }: { children: ReactNode }) {
  const [gender, setGenderState] = useState<Gender>("female");

  useEffect(() => {
    setGenderState(loadGender());
  }, []);

  const value = useMemo<GenderContextValue>(
    () => ({
      gender,
      setGender: (g: Gender) => {
        setGenderState(g);
        saveGender(g);
      },
      toggleGender: () => {
        setGenderState((prev) => {
          const next: Gender = prev === "female" ? "male" : "female";
          saveGender(next);
          return next;
        });
      },
    }),
    [gender],
  );

  return (
    <GenderContext.Provider value={value}>{children}</GenderContext.Provider>
  );
}

export function useGender(): GenderContextValue {
  return useContext(GenderContext);
}
