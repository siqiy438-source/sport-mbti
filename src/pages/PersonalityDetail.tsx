import { personalities } from "../data/personalities";
import { getEnrichment } from "../data/enrichments";
import {
  DIMENSIONS,
  DIMENSION_LABELS,
  type DimensionKey,
  type Personality,
} from "../types";
import { navigate } from "../lib/router";

export default function PersonalityDetail({ id }: { id: string }) {
  const p = personalities.find((x) => x.id === id);
  if (!p) {
    return (
      <div className="max-w-2xl mx-auto px-5 py-20 text-center">
        <div className="text-6xl mb-4">🤷</div>
        <h2 className="font-serif text-2xl mb-2">没找到这个人格</h2>
        <p className="text-muted mb-6">ID: {id}</p>
        <button
          onClick={() => navigate({ name: "landing" })}
          className="px-6 py-3 bg-accent text-white rounded-full"
        >
          返回首页
        </button>
      </div>
    );
  }

  const enrich = getEnrichment(id);

  return (
    <div className="pb-24">
      <Header />
      <div className="max-w-4xl mx-auto px-5 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
          <HeroCard personality={p} />
          <ProfileCard personality={p} />
        </div>

        <Section title="人格描述">
          <p className="text-ink/85 leading-loose text-sm md:text-base whitespace-pre-line">
            {enrich?.longDesc ?? p.desc}
          </p>
        </Section>

        <Section title="维度画像">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DIMENSIONS.map((d) => (
              <DimensionCard
                key={d}
                dim={d}
                value={p.traits[d]}
                note={enrich?.dimNotes[d]}
              />
            ))}
          </div>
        </Section>
      </div>

      <BottomBar />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-bg/85 backdrop-blur border-b border-ink/5">
      <div className="max-w-4xl mx-auto px-5 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate({ name: "landing" })}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
            S
          </div>
          <span className="font-medium tracking-wide text-sm">SMBTI</span>
        </button>
        <nav className="flex items-center gap-4 text-sm text-muted">
          <button
            onClick={() => navigate({ name: "quiz" })}
            className="hover:text-accent transition"
          >
            开始测试
          </button>
          <button
            onClick={() => navigate({ name: "gallery" })}
            className="hover:text-accent transition"
          >
            人格图鉴
          </button>
        </nav>
      </div>
    </header>
  );
}

function HeroCard({ personality }: { personality: Personality }) {
  return (
    <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card flex flex-col items-center justify-center text-center min-h-[280px]">
      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-accentSoft text-accent text-xs">
        <span>MBTI</span>
        <span className="font-bold tracking-widest">{personality.mbti}</span>
      </div>
      <div className="text-xs text-muted mb-2 tracking-widest">
        人格类型：
      </div>
      <div className="font-serif text-3xl md:text-4xl text-ink mb-3">
        {personality.cn}
      </div>
      <div className="text-7xl md:text-8xl my-3 leading-none">
        {personality.emoji}
      </div>
      <div className="font-serif text-xl md:text-2xl text-accent mt-2 tracking-wide">
        {personality.en}
      </div>
      <div className="text-muted italic mt-4 text-sm">
        「{personality.punch}」
      </div>
    </div>
  );
}

function ProfileCard({ personality }: { personality: Personality }) {
  return (
    <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card flex flex-col">
      <div className="text-xs text-muted mb-3 tracking-widest">人格档案</div>
      <div className="font-serif text-3xl md:text-4xl text-ink mb-1">
        {personality.en}
        <span className="text-muted/70 text-2xl md:text-3xl ml-1">
          （{personality.cn}）
        </span>
      </div>
      <p className="text-muted text-sm md:text-base mt-3">
        「{personality.punch}」
      </p>
      <div className="mt-auto pt-6">
        <span className="inline-block px-3 py-1 rounded-full bg-accentSoft text-accent text-xs">
          {personality.category}
        </span>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card mb-5">
      <h3 className="font-serif text-xl md:text-2xl mb-4">{title}</h3>
      {children}
    </div>
  );
}

function DimensionCard({
  dim,
  value,
  note,
}: {
  dim: DimensionKey;
  value: number;
  note?: string;
}) {
  const level = value >= 8 ? "高" : value <= 3 ? "低" : "中";
  const levelColor =
    value >= 8
      ? "text-accent"
      : value <= 3
        ? "text-muted"
        : "text-ink/70";

  return (
    <div className="bg-accentSoft/40 rounded-2xl p-4">
      <div className="flex items-baseline justify-between mb-2">
        <div className="font-medium">{DIMENSION_LABELS[dim]}</div>
        <div className={`text-sm ${levelColor}`}>
          {level} · {value}/10
        </div>
      </div>
      <div className="h-1.5 bg-ink/5 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${value * 10}%` }}
        />
      </div>
      {note && (
        <p className="text-sm text-ink/75 leading-relaxed">{note}</p>
      )}
    </div>
  );
}

function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t border-ink/5 z-10">
      <div className="max-w-4xl mx-auto px-5 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate({ name: "landing" })}
          className="px-4 py-2.5 bg-card border border-ink/10 text-muted rounded-full hover:text-ink transition text-sm"
        >
          返回首页
        </button>
        <button
          onClick={() => navigate({ name: "quiz" })}
          className="flex-1 py-2.5 bg-accent text-white rounded-full hover:opacity-90 transition text-sm font-medium"
        >
          开始测试 · 测出我的人格
        </button>
      </div>
    </div>
  );
}
