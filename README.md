# SMBTI · 运动人格测试

30 种运动人格的纯前端玩具，受 [sbti.ai](https://www.sbti.ai/) 启发。
React + Vite + Tailwind，部署在 GitHub Pages，无后端、无数据收集。

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:5173

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（建议命名为 `sport-mbti`），推到 `main` 分支
2. 仓库 Settings → Pages → **Source 选 GitHub Actions**
3. 等待 Actions 自动跑完，访问 `https://<你的用户名>.github.io/sport-mbti/`

如果仓库名不叫 `sport-mbti`，修改 `vite.config.ts` 里的 `base`：

```ts
base: process.env.GITHUB_PAGES === "1" ? "/你的仓库名/" : "/",
```

## 自定义

- 30 个人格：`src/data/personalities.ts`
- 20 道题：`src/data/questions.ts`
- 匹配算法（6 维欧氏距离）：`src/lib/calculate.ts`
- 头像目前用 emoji 占位，要换成插画就改 `personalities.ts` 里的 `emoji` 字段，或加 `image` 字段

## 算法

6 个维度：`intensity` 强度 / `social` 社交 / `show` 表演欲 / `commit` 投入度 / `gear` 装备控 / `outdoor` 户外偏好。

每个人格在 6 维上有 [0-10] 的特征向量。用户答完 20 题，每题对若干维度加减分（初始 5，clamp 到 [0-10]）。最后用欧氏距离匹配最接近的人格。
