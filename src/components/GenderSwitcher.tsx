import { useGender } from "../lib/gender-context";
import type { Gender } from "../types";

interface GenderSwitcherProps {
  /** "compact" 紧凑（导航栏用） / "full" 完整（hero/结果页用，更明显） */
  variant?: "compact" | "full";
  /** 是否在每个选项前显示小图标 */
  withIcon?: boolean;
  className?: string;
}

const OPTIONS: { value: Gender; label: string; icon: string }[] = [
  { value: "male", label: "男生", icon: "👨" },
  { value: "female", label: "女生", icon: "👩" },
];

export default function GenderSwitcher({
  variant = "compact",
  withIcon = false,
  className = "",
}: GenderSwitcherProps) {
  const { gender, setGender } = useGender();

  const isFull = variant === "full";
  const padding = isFull ? "px-4 py-2 text-sm" : "px-2.5 py-1 text-xs";
  const wrapBg = isFull
    ? "bg-card shadow-card"
    : "bg-ink/5";
  const wrapPad = isFull ? "p-1" : "p-0.5";

  return (
    <div
      className={`inline-flex items-center rounded-full ${wrapBg} ${wrapPad} ${className}`}
      role="radiogroup"
      aria-label="头像形象"
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
            className={`${padding} rounded-full transition font-medium whitespace-nowrap ${
              active
                ? "bg-accent text-white shadow-sm"
                : "text-muted hover:text-ink"
            }`}
          >
            {withIcon && <span className="mr-1">{opt.icon}</span>}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
