/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  future: {
    // hover: 样式只在真实鼠标设备上生效，避免手机端点击后 sticky hover 卡住
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        bg: "#F5EFE3",
        card: "#FFFFFF",
        ink: "#1F2A1A",
        accent: "#3D6B3A",
        accentSoft: "#E6EFD9",
        muted: "#7B8474",
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Noto Sans SC"', "system-ui", "sans-serif"],
        serif: ['"Songti SC"', '"Noto Serif SC"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(31,42,26,0.06), 0 8px 24px rgba(31,42,26,0.06)",
      },
    },
  },
  plugins: [],
};
