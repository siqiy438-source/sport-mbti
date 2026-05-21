import { personalities } from "../data/personalities";

export default function Gallery({
  onPickType,
  onHome,
  onStart,
}: {
  onPickType: (id: string) => void;
  onHome: () => void;
  onStart: () => void;
}) {
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
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
          <button
            onClick={onHome}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
              S
            </div>
            <span className="font-medium tracking-wide text-sm">SMBTI</span>
          </button>
          <button
            onClick={onStart}
            className="text-sm text-accent hover:opacity-80 transition"
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
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
              {items.map((p) => (
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
                  <div className="text-sm md:text-base font-medium">
                    {p.cn}
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
