import { personalities } from "../data/personalities";
import Avatar from "../components/Avatar";
import Logo from "../components/Logo";
import { useGender } from "../lib/gender-context";

export default function Gallery({
  onPickType,
  onHome,
  onStart,
}: {
  onPickType: (id: string) => void;
  onHome: () => void;
  onStart: () => void;
}) {
  const { gender } = useGender();

  // 按 category 分组
  const grouped = personalities.reduce<Record<string, typeof personalities>>(
    (acc, p) => {
      (acc[p.category] ??= []).push(p);
      return acc;
    },
    {},
  );

  return (
    <div className="pb-24">
      <header className="sticky top-0 z-10 bg-bg/85 backdrop-blur border-b border-ink/5">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-3">
          <button
            onClick={onHome}
            className="hover:opacity-80 transition"
            aria-label="返回首页"
          >
            <Logo size="sm" />
          </button>
          <button
            onClick={onStart}
            className="text-sm text-accent hover:opacity-80 transition whitespace-nowrap"
          >
            开始测试 →
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-5xl text-center mb-3">
          30 种运动人格图鉴
        </h1>
        <p className="text-center text-muted text-sm mb-12">
          点开任意一个看详细档案
        </p>

        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="font-serif text-xl md:text-2xl">{cat}</h2>
              <span className="text-xs text-muted">{items.length} 种</span>
              <div className="flex-1 h-px bg-ink/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {items.map((p) => (
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
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t border-ink/5 z-10">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center gap-3">
          <button
            onClick={onHome}
            className="px-4 py-2.5 bg-card border border-ink/10 text-muted rounded-full hover:text-ink transition text-sm"
          >
            返回首页
          </button>
          <button
            onClick={onStart}
            className="flex-1 py-2.5 bg-accent text-white rounded-full hover:opacity-90 transition text-sm font-medium"
          >
            开始测试 · 测出我的人格
          </button>
        </div>
      </div>
    </div>
  );
}
