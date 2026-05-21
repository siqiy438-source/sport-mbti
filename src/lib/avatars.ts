import type { Gender } from "../types";

/**
 * 解析人格头像的 URL。
 * 开发时 base 是 `/`，部署到 GitHub Pages 时是 `/sport-mbti/`，由 Vite 自动注入 BASE_URL。
 */
export function getAvatarUrl(id: string, gender: Gender): string {
  return `${import.meta.env.BASE_URL}avatars/${gender}/${id}.webp`;
}

const GENDER_KEY = "smbti_gender_v1";

export function loadGender(): Gender {
  if (typeof window === "undefined") return "female";
  const stored = window.localStorage.getItem(GENDER_KEY);
  if (stored === "male" || stored === "female") return stored;
  return "male";
}

export function saveGender(g: Gender): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(GENDER_KEY, g);
}
