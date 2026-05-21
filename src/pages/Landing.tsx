import { personalities } from "../data/personalities";
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
  return (
    <div className="max-w-5xl mx-auto px-5 py-6 md:py-12">
      <header className="flex items-center justify-between mb-10 md:mb-14">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-bold">
            S
          </div>
          <span className="text-lg font-medium tracking-wide">SMBTI</span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-muted">
          <button
            onClick={onStart}
            className="hover:text-accent transition"
          >
            开始测试
          </button>
          <button
            onClick={onViewGallery}
            className="hover:text-accent transition"
          >
            人格图鉴
          </button>
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
              查看上次结果：{lastResult.emoji} {lastResult.cn}
            </button>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-center text-muted text-sm mb-6 tracking-widest">
          ── 30 种运动人格图鉴 ──
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {personalities.map((p) => (
            <button
              key={p.id}
              onClick={() => onPickType(p.id)}
              className="bg-card rounded-2xl p-3 md:p-4 shadow-card text-center hover:scale-105 hover:bg-accentSoft/30 transition cursor-pointer"
            >
              <div className="text-[10px] text-muted mb-1">
                你的人格类型是：
              </div>
              <div className="text-3xl md:text-4xl mb-1">{p.emoji}</div>
              <div className="text-accent font-medium text-xs md:text-sm">
                {p.en}
              </div>
              <div className="text-sm md:text-base font-medium">{p.cn}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
