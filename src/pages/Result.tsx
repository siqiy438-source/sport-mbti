import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  DIMENSIONS,
  DIMENSION_LABELS,
  type Personality,
} from "../types";

export default function Result({
  personality,
  onRestart,
  onHome,
}: {
  personality: Personality;
  onRestart: () => void;
  onHome: () => void;
}) {
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
      link.download = `smbti-${personality.en}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-5 py-8 md:py-12">
      <div
        ref={cardRef}
        className="bg-card rounded-3xl p-6 md:p-10 shadow-card"
      >
        <div className="text-center">
          <div className="text-xs md:text-sm text-muted mb-2 tracking-widest">
            你的运动人格类型是：
          </div>
          <div className="text-7xl md:text-8xl mb-4 leading-none">
            {personality.emoji}
          </div>
          <div className="font-serif text-xl md:text-2xl text-accent mb-1 tracking-wide">
            {personality.en}
          </div>
          <div className="font-serif text-3xl md:text-5xl text-ink mb-6">
            {personality.cn}
          </div>
          <div className="text-muted italic mb-6 text-base md:text-lg">
            「{personality.punch}」
          </div>
        </div>

        <div className="bg-accentSoft rounded-2xl p-5 md:p-6 mb-6 text-ink/90 leading-relaxed text-sm md:text-base">
          {personality.desc}
        </div>

        <RadarChart personality={personality} />

        <div className="text-center text-xs text-muted mt-4">
          SMBTI · {personality.category}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={downloadCard}
          disabled={saving}
          className="w-full py-3.5 bg-accent text-white rounded-full hover:opacity-90 transition disabled:opacity-60 font-medium"
        >
          {saving ? "生成中..." : "📥 下载结果图 · 分享给朋友"}
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
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const r = 90;
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
              fontSize={13}
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
