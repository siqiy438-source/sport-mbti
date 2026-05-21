import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  DIMENSIONS,
  DIMENSION_LABELS,
  type MbtiType,
  type Personality,
} from "../types";
import Avatar from "../components/Avatar";
import GenderSwitcher from "../components/GenderSwitcher";
import Logo from "../components/Logo";
import { useGender } from "../lib/gender-context";

export default function Result({
  personality,
  userMbti,
  onRestart,
  onHome,
}: {
  personality: Personality;
  userMbti: MbtiType;
  onRestart: () => void;
  onHome: () => void;
}) {
  const { gender } = useGender();
  const cardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  async function downloadCard() {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        backgroundColor: "#F5EFE3",
      });
      const link = document.createElement("a");
      link.download = `smbti-${personality.en}-${gender}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-5 py-6 md:py-10">
      <div
        ref={cardRef}
        className="bg-bg rounded-3xl overflow-hidden shadow-card"
      >
        {/* 顶部品牌条 */}
        <div className="flex items-center justify-between px-6 pt-5 pb-2">
          <Logo size="sm" />
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accentSoft text-accent text-[11px]">
            <span>MBTI</span>
            <span className="font-bold tracking-widest">{userMbti}</span>
            {userMbti !== personality.mbti && (
              <span className="text-muted/70 text-[9px]">
                · 推 {personality.mbti}
              </span>
            )}
          </div>
        </div>

        {/* 主视觉：大图 */}
        <div className="relative bg-bg">
          <div className="absolute top-2 left-6 text-[11px] text-muted tracking-widest z-10">
            你的运动人格类型是：
          </div>
          <Avatar
            id={personality.id}
            gender={gender}
            emoji={personality.emoji}
            sizeClassName="w-full aspect-square max-w-md mx-auto"
            emojiClassName="text-9xl"
            alt={`${personality.cn} - ${personality.en}`}
          />
        </div>

        {/* 名字 + 一句吐槽 */}
        <div className="bg-card px-6 pt-5 pb-6 text-center">
          <div className="font-serif text-lg md:text-xl text-accent tracking-wide">
            {personality.en}
          </div>
          <div className="font-serif text-3xl md:text-5xl text-ink mt-1">
            {personality.cn}
          </div>
          <div className="text-muted italic mt-3 text-sm md:text-base">
            「{personality.punch}」
          </div>
        </div>

        {/* 描述 */}
        <div className="bg-card px-6 pb-6">
          <div className="bg-accentSoft/60 rounded-2xl p-5 text-ink/90 leading-relaxed text-sm md:text-base">
            {personality.desc}
          </div>
        </div>

        {/* 雷达图 */}
        <div className="bg-card px-6 pb-6">
          <RadarChart personality={personality} />
        </div>

        {/* 底栏 */}
        <div className="bg-card px-6 pb-5 text-center text-xs text-muted border-t border-ink/5 pt-4">
          SMBTI · {personality.category} · siqiy438-source.github.io/sport-mbti
        </div>
      </div>

      {/* 切换 + 下载（不在卡片里，只是操作区） */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between gap-3 px-1">
          <span className="text-xs text-muted">海报形象</span>
          <GenderSwitcher variant="full" />
        </div>

        <button
          onClick={downloadCard}
          disabled={saving}
          className="w-full py-3.5 bg-accent text-white rounded-full hover:opacity-90 transition disabled:opacity-60 font-medium"
        >
          {saving ? "生成中..." : "下载结果图 · 分享给朋友"}
        </button>
        <div className="flex gap-3">
          <button
            onClick={onRestart}
            className="flex-1 py-3 bg-card border border-accent text-accent rounded-full hover:bg-accentSoft transition"
          >
            重新测试
          </button>
          <button
            onClick={onHome}
            className="flex-1 py-3 bg-card border border-muted/30 text-muted rounded-full hover:bg-card/80 transition"
          >
            返回首页
          </button>
        </div>
      </div>
    </div>
  );
}

function RadarChart({ personality }: { personality: Personality }) {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const r = 75;
  const n = DIMENSIONS.length;
  const angles = DIMENSIONS.map((_, i) => (i / n) * Math.PI * 2 - Math.PI / 2);

  const pointStr = (scale: number, useTrait: boolean) =>
    DIMENSIONS.map((d, i) => {
      const factor = useTrait ? personality.traits[d] / 10 : scale;
      const x = cx + Math.cos(angles[i]) * r * factor;
      const y = cy + Math.sin(angles[i]) * r * factor;
      return `${x},${y}`;
    }).join(" ");

  return (
    <div className="flex justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {[0.25, 0.5, 0.75, 1].map((scale, i) => (
          <polygon
            key={i}
            points={pointStr(scale, false)}
            fill="none"
            stroke="#3D6B3A"
            strokeOpacity={0.15}
            strokeWidth={1}
          />
        ))}
        {DIMENSIONS.map((_, i) => {
          const x = cx + Math.cos(angles[i]) * r;
          const y = cy + Math.sin(angles[i]) * r;
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#3D6B3A"
              strokeOpacity={0.1}
              strokeWidth={1}
            />
          );
        })}
        <polygon
          points={pointStr(1, true)}
          fill="#3D6B3A"
          fillOpacity={0.3}
          stroke="#3D6B3A"
          strokeWidth={2}
        />
        {DIMENSIONS.map((d, i) => {
          const x = cx + Math.cos(angles[i]) * (r + 18);
          const y = cy + Math.sin(angles[i]) * (r + 18);
          return (
            <text
              key={d}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={12}
              fill="#7B8474"
            >
              {DIMENSION_LABELS[d]} {personality.traits[d]}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
