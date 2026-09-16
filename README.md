# 刘浩瀚 Portfolio V1

面向前端实习 / 初级前端岗位的个人作品集网站，使用 Vue 3 + TypeScript + Vite 构建。

## 页面结构

- `/`：作品集主页
- `/projects/hireflow`：HireFlow 前端项目 Case Study
- `/projects/paper-cutting`：中国剪纸可视化项目页
- `/projects/maixiang-health`：脉向健康 UI/UX Case Study
- `/projects/liuli-workshop`：琉琉工坊 UI/UX Case Study

## 本地运行

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
```

## 部署到 Render Static Site

- Build Command：`pnpm install --frozen-lockfile && pnpm build`
- Publish Directory：`dist`
- Redirect / Rewrite：`/*` → `/index.html`，Action 选择 `Rewrite`

## 已放入的素材

- HireFlow：候选人详情截图
- 脉向健康：UI 海报、产品研究海报、若干页面截图
- 琉琉工坊：两张 UI 设计海报
- 个人头像与 Word 简历
- 中国剪纸：当前使用临时 SVG 封面，V2 完成后直接替换

## 建议下一步

1. 剪纸 V2 完成后替换 `public/assets/images/paper-cutting-cover.svg`。
2. 如果有更多 HireFlow / 脉向健康页面截图，可继续加入对应 Case Study。
3. 修改 `src/views/HomeView.vue` 的个人简介，以匹配最终简历措辞。
4. 部署后把 Portfolio 地址加到简历和 BOSS 直聘介绍中。
