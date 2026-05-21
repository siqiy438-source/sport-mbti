import { useGender } from "../lib/gender-context";
import type { Gender } from "../types";

interface GenderSwitcherProps {
  /** "compact" 紧凑（导航栏用） / "full" 完整（结果页用） */
  variant?: "compact" | "full";
  className?: string;
}

const OPTIONS: { value: Gender; label: string }[] = [
  { value: "female", label: "女" },
  { value: "male", label: "男" },
];

export default function GenderSwitcher({
  variant = "compact",
  className = "",
}: GenderSwitcherProps) {
  const { gender, setGender } = useGender();

  const padding = variant === "compact" ? "px-2.5 py-1 text-xs" : "px-4 py-2 text-sm";

  return (
    <div
      className={`inline-flex items-center rounded-full bg-ink/5 p-0.5 ${className}`}
      role="radiogroup"
      aria-label="头像性别"
    >
      {OPTIONS.map((opt) => {
        const active = gender === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setGender(opt.value)}
            className={`${padding} rounded-full transition font-medium ${
              active
                ? "bg-accent text-white shadow-sm"
                : "text-muted hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
