import { personalities } from "../data/personalities";
import Avatar from "../components/Avatar";
import GenderSwitcher from "../components/GenderSwitcher";
import Logo from "../components/Logo";
import { useGender } from "../lib/gender-context";
import type { Personality } from "../types";

export default function Landing({
  lastResult,
  onStart,
  onViewResult,
  onPickType,
  onViewGallery,
}: {
  lastResult: Personality | null;
  onStart: () => void;
  onViewResult: () => void;
  onPickType: (id: string) => void;
  onViewGallery: () => void;
}) {
  const { gender } = useGender();

  return (
    <div className="max-w-5xl mx-auto px-5 py-6 md:py-12">
      <header className="flex items-center justify-between mb-10 md:mb-14">
        <Logo size="md" showTagline />

        <nav className="flex items-center gap-3 md:gap-5 text-sm text-muted">
          <button onClick={onStart} className="hover:text-accent transition">
            开始测试
          </button>
          <button
            onClick={onViewGallery}
            className="hover:text-accent transition"
          >
            人格图鉴
          </button>
          <GenderSwitcher />
        </nav>
      </header>

      <section className="text-center mb-14">
        <h1 className="font-serif text-4xl md:text-6xl mb-5 leading-tight">
          运动人格测试
        </h1>
        <p className="text-muted text-lg md:text-xl mb-2">
          30 种运动人格，你是哪一只？
        </p>
        <p className="text-muted text-sm mb-8">
          不严肃 · 不准确 · 但很真实
        </p>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={onStart}
            className="px-10 py-4 bg-accent text-white rounded-full hover:opacity-90 transition shadow-card text-lg font-medium"
          >
            开始测试 · 约 4 分钟
          </button>
          {lastResult && (
            <button
              onClick={onViewResult}
              className="text-sm text-muted underline hover:text-accent transition"
            >
              查看上次结果：{lastResult.cn}
            </button>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-center text-muted text-sm mb-6 tracking-widest">
          ── 30 种运动人格图鉴 ──
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {personalities.map((p) => (
            <button
              key={p.id}
              onClick={() => onPickType(p.id)}
              className="group bg-bg rounded-2xl overflow-hidden text-center hover:scale-[1.03] transition cursor-pointer flex flex-col"
            >
              <div className="relative bg-bg">
                <Avatar
                  id={p.id}
                  gender={gender}
                  emoji={p.emoji}
                  sizeClassName="w-full aspect-square"
                  emojiClassName="text-5xl"
                  alt={`${p.cn} - ${p.en}`}
                />
                <div className="absolute top-2 right-2 text-[10px] text-muted/80 font-mono tracking-widest bg-card/70 backdrop-blur px-1.5 py-0.5 rounded">
                  {p.mbti}
                </div>
              </div>
              <div className="px-2 py-3 bg-card group-hover:bg-accentSoft/50 transition">
                <div className="text-accent font-medium text-xs md:text-sm tracking-wide">
                  {p.en}
                </div>
                <div className="text-sm md:text-base font-medium mt-0.5">
                  {p.cn}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
