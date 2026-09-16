export type Project = {
  slug: string
  index: string
  title: string
  subtitle: string
  type: string
  summary: string
  tags: string[]
  accent: string
  image: string
  route: string
  demo?: string
  github?: string
}

export const projects: Project[] = [
  {
    slug: 'hireflow',
    index: '01',
    title: 'HireFlow',
    subtitle: '招聘流程协作平台',
    type: 'Frontend Engineering',
    summary: '围绕职位、候选人、面试与招聘阶段流转构建的 Vue 3 企业后台项目，重点展示业务流程、REST API、状态管理与工程化能力。',
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'REST API', 'ECharts'],
    accent: '#2254f4',
    image: '/assets/images/hireflow-detail.png',
    route: '/projects/hireflow',
    demo: 'https://hireflow-wed.onrender.com',
    github: 'https://github.com/gielensras471-creator/hireflow'
  },
  {
    slug: 'paper-cutting',
    index: '02',
    title: '中国剪纸',
    subtitle: '非遗数字文化可视化平台 · V1.0',
    type: 'Data Visualization',
    summary: '基于中国剪纸非遗数据构建的 Vue 3 交互式可视化平台，涵盖全国地域探索、传承人与流派分析，并通过参数化 SVG 数字剪纸实验室增强文化互动。',
    tags: ['Vue 3', 'TypeScript', 'ECharts', 'SVG', 'Data Viz'],
    accent: '#b4232f',
    image: '/assets/images/paper-cutting-heritage.png',
    route: '/projects/paper-cutting',
    demo: 'https://gielensras471-creator.github.io/paper-cutting-visualization/',
    github: 'https://github.com/gielensras471-creator/paper-cutting-visualization'
  },
  {
    slug: 'maixiang-health',
    index: '03',
    title: '脉向健康',
    subtitle: '家庭健康管理 App UI/UX',
    type: 'UI / UX Case Study',
    summary: '蓝桥杯参赛 UI/UX 方案，基于企业 UI 设计专利申请相关项目进一步延展，围绕个人健康、家庭协同、智能识别与健康服务构建完整移动端体验。',
    tags: ['Adobe XD', 'UI / UX', 'Design System', 'Mobile', 'Product'],
    accent: '#22b978',
    image: '/assets/images/maixiang-cover.jpg',
    route: '/projects/maixiang-health'
  },
  {
    slug: 'liuli-workshop',
    index: '04',
    title: '琉琉工坊',
    subtitle: '非遗数字体验小程序',
    type: 'UI / UX Concept',
    summary: '以项目负责人视角呈现的非遗数字体验设计，通过内容传播、传习课堂、虚拟工坊与 AR / AI 概念交互，探索传统工艺的年轻化表达。',
    tags: ['Adobe XD', 'UI / UX', 'Mobile UI', 'AR Concept', 'Culture'],
    accent: '#d99e66',
    image: '/assets/images/liuli-cover.jpg',
    route: '/projects/liuli-workshop'
  }
]
