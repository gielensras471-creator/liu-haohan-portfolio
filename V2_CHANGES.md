# Portfolio V2 修改记录

## 本次目标
将「脉向健康」与「琉琉工坊」从简单图片展示页升级为可以用于求职作品集的完整 UI/UX Case Study；中国剪纸项目暂时保持占位，等待 V2 项目完成后再更新。

## 1. 脉向健康 Case Study
修改文件：`src/views/projects/MaixiangHealthView.vue`

新增内容：
- 补充蓝桥杯参赛项目背景，并明确其基于此前参与的企业 UI 设计专利申请相关方案进一步延展。
- 新增项目基本信息：Project / Role / Focus / Deliverable。
- 新增 Overview：个人健康、家庭协同、健康助手、智能录入四类核心体验。
- 新增 Research：从健康数据分散、家庭协同、认知减负三个方向说明产品判断。
- 新增 Information Architecture：健康数据 / 健康助手 / 健康服务 / 个人中心。
- 新增用户路径：注册建档 → 设备/亲友绑定 → 查看数据 → 获得建议 → 长期留存。
- 新增 Design System：主色、功能色、字体、卡片与组件逻辑。
- 新增 Core Experience：健康助手的信息层级与使用逻辑。
- 新增 Family & Recognition：家庭、消息、智能识别、运动记录页面展示。
- 新增 Final Screens 与 Reflection。
- 增加医疗类项目说明，避免把概念方案表述成真实医疗诊断产品。

## 2. 琉琉工坊 Case Study
修改文件：`src/views/projects/LiuliWorkshopView.vue`

新增内容：
- 从非遗传播问题出发重写项目背景，不再只是展示两张海报。
- Role 使用“项目负责人 / UI·UX 设计”，不展示其他成员姓名，也不将团队成果虚构为单人项目。
- 新增产品结构：首页 / 工坊 / 课堂 / 我的。
- 新增体验路径：认知接触 → 内容浏览 → 深度学习 → 虚拟创作 → 收藏分享。
- 新增 Design System：暖金、浅粉、深灰视觉体系与组件原则。
- 新增 Core Experience：发现、学习、实验、创作四步体验。
- 将 AR 工坊单独作为 Signature Feature 展示。
- 明确 AR / AI / 3D 为 UI/UX 概念交互，而非已完成开发功能。
- 新增完整设计长图与设计交付说明。
- 新增 Reflection。

## 3. 首页项目描述与技能
修改文件：
- `src/data/projects.ts`
- `src/views/HomeView.vue`

调整：
- 脉向健康项目描述加入蓝桥杯与企业 UI 专利申请方案延展背景。
- 两个 UI 项目的工具标签由 Figma 调整为 Adobe XD，更符合原始 `.xd` 设计文件。
- 琉琉工坊描述改为项目负责人视角。
- 首页技能标签增加 Adobe XD。

## 4. Case Study 样式扩展
修改文件：`src/styles/global.css`

新增：
- 项目 Meta 信息卡。
- 洞察卡片 / 信息架构卡片 / 用户旅程。
- Research 双栏布局。
- Design System 原则卡片。
- 核心页面故事布局。
- 最终界面展示布局。
- AR Signature Feature。
- Reflection / Disclaimer。
- Tablet / Mobile 响应式适配。

## 5. 新增图片资源
目录：`public/assets/images/`

新增：
- `maixiang-poster-visual.webp`
- `maixiang-poster-research.webp`
- `maixiang-family-recognition.webp`
- `maixiang-exercise.webp`
- `maixiang-assistant.webp`
- `maixiang-flow-screens.webp`
- `maixiang-login-mockup.webp`
- `maixiang-onboarding.webp`
- `liuli-overview.webp`
- `liuli-screens.webp`
- `liuli-longboard.webp`

图片已转为 WebP，避免将原始设计文件、PPT 或大尺寸海报直接塞进网站导致体积异常。

## 6. 暂未修改
- HireFlow Case Study：保持现状。
- 中国剪纸 V2：继续使用占位页，等项目重构完成后统一替换。

## 验证
- 所有 11 个 Vue SFC 已使用 Vue SFC Parser 检查，0 个解析错误。
- 3 个 TypeScript 文件已完成语法转译检查，0 个语法错误。
- 当前执行环境只有 Windows 版 Rollup 可选二进制依赖，无法在 Linux 容器完整执行 Vite build；请在本地解压后运行 `pnpm install && pnpm build` 做最终生产构建验证。
