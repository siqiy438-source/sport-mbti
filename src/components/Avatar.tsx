import { useEffect, useState } from "react";
import { getAvatarUrl } from "../lib/avatars";
import type { Gender } from "../types";

interface AvatarProps {
  id: string;
  gender: Gender;
  /** emoji 兜底（图片没加载到位时显示） */
  emoji: string;
  /** Tailwind 尺寸 class，例如 "w-20 h-20" 或 "w-full aspect-square" */
  sizeClassName?: string;
  /** emoji 字号 fallback class */
  emojiClassName?: string;
  /** 额外的 img class（例如 object-contain） */
  imgClassName?: string;
  alt?: string;
}

/**
 * 优雅降级的头像组件：
 *  - 图片可用 → 显示 PNG
 *  - 图片缺失 → fallback 到 emoji
 *  - 透明背景，跟卡片融合（图片本身就是 #F5EFE3 米色背景，跟全局 bg 一致）
 */
export default function Avatar({
  id,
  gender,
  emoji,
  sizeClassName = "w-full aspect-square",
  emojiClassName = "text-7xl",
  imgClassName = "object-contain",
  alt,
}: AvatarProps) {
  const [errored, setErrored] = useState(false);

  // gender / id 切换时重置错误状态，给新图一次加载机会
  useEffect(() => {
    setErrored(false);
  }, [id, gender]);

  if (errored) {
    return (
      <div
        className={`${sizeClassName} flex items-center justify-center leading-none ${emojiClassName}`}
      >
        {emoji}
      </div>
    );
  }

  return (
    <img
      src={getAvatarUrl(id, gender)}
      alt={alt ?? id}
      onError={() => setErrored(true)}
      className={`${sizeClassName} ${imgClassName}`}
      loading="lazy"
      decoding="async"
    />
  );
}
