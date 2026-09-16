<template>
  <div class="page case-page case-page--paper">
    <CaseStudyHero
      eyebrow="02 · DATA VISUALIZATION / INTERACTION"
      title="中国剪纸非遗数字文化可视化平台"
      lead="基于中国剪纸国家级非遗项目与代表性传承人数据构建的交互式数字文化平台。项目从全国地域分布进入地方文化探索，再延伸到传承人与风格流派分析，并通过参数化 SVG 数字剪纸实验室把“看数据”转化为“参与文化”。"
      :tags="['Vue 3', 'TypeScript', 'Vite', 'ECharts', 'GeoJSON', 'SVG']"
      accent="#b4232f"
      demo="https://gielensras471-creator.github.io/paper-cutting-visualization/"
      github="https://github.com/gielensras471-creator/paper-cutting-visualization"
    />

    <section class="case-cover paper-cover paper-cover--real">
      <img src="/assets/images/paper-cutting-heritage.png" alt="中国剪纸非遗数字文化可视化平台传承与流派页面" />
    </section>

    <CaseStudySection eyebrow="OVERVIEW" title="从非遗数据展示，升级为可以探索与互动的文化产品。">
      <div class="two-column-copy">
        <p>项目最初来自中国剪纸非遗数据可视化课题。V1.0 不再停留在单页图表展示，而是重新组织为“全国总览—地域探索—传承与流派—数字实验室”的完整体验路径，让用户既能理解数据，也能继续进入文化内容。</p>
        <p>我独立完成信息架构、界面设计、数据整理、Vue 组件实现、ECharts 可视化、SVG 生成逻辑与 GitHub Pages 部署，并持续通过版本迭代修正地图联动、流派关系和生成器交互。</p>
      </div>

      <div class="case-meta-grid case-meta-grid--paper">
        <div><span>ROLE</span><strong>独立设计与前端开发</strong></div>
        <div><span>STACK</span><strong>Vue 3 · TS · ECharts · SVG</strong></div>
        <div><span>MODULES</span><strong>4 个核心体验模块</strong></div>
        <div><span>RELEASE</span><strong>V1.0 · GitHub Pages</strong></div>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="INFORMATION ARCHITECTURE" title="用四层路径把数据、地域、传承和创作串起来。" tinted>
      <div class="journey-line journey-line--paper">
        <span>全国总览</span><b>→</b><span>地域探索</span><b>→</b><span>传承与流派</span><b>→</b><span>数字实验室</span>
      </div>
      <div class="feature-grid paper-feature-grid">
        <article><span>01</span><h3>全国总览</h3><p>以中国地图和省份 Top 10 建立入口，并联动地域摘要、批次趋势与代表性传承人数据。</p></article>
        <article><span>02</span><h3>地域探索</h3><p>从省份进入具体项目、传承人和地方风格，让宏观分布能够继续下钻到地方文化。</p></article>
        <article><span>03</span><h3>传承与流派</h3><p>通过南北风格对照、流派关系图和传承人档案馆，从“项目”延伸到“人”和文化谱系。</p></article>
        <article><span>04</span><h3>数字实验室</h3><p>以参数化 SVG 生成器和纹样基因库提供创作入口，让传统纹样从信息展示转化为可操作体验。</p></article>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="HERITAGE & STYLES" title="把抽象的“流派差异”做成可以阅读和点击的关系。">
      <div class="gallery-grid gallery-grid--two case-gallery--contained paper-gallery">
        <figure>
          <img src="/assets/images/paper-cutting-graph.png" alt="中国剪纸风格流派关系图" />
          <figcaption>风格流派关系图 · 支持节点点击与右侧风格画像联动</figcaption>
        </figure>
        <figure>
          <img src="/assets/images/paper-cutting-archive.png" alt="中国剪纸代表性传承人档案馆" />
          <figcaption>代表性传承人档案馆 · 搜索、筛选与人物详情联动</figcaption>
        </figure>
      </div>
      <p class="case-note">这一部分将“北方 / 南方 / 民族地域”等风格概念拆解为可视化关系，并结合项目节点与代表性传承人档案，避免只用大段文字解释文化差异。</p>
    </CaseStudySection>

    <CaseStudySection eyebrow="DIGITAL PAPER-CUTTING LAB" title="用 SVG 参数化生成，让用户真正参与一次剪纸。" tinted>
      <div class="feature-grid paper-feature-grid">
        <article><span>STYLE</span><h3>4 种地域风格</h3><p>北方粗犷、南方细腻、彩色蔚县与民族图腾，通过不同结构和视觉语言形成差异。</p></article>
        <article><span>FOLD</span><h3>4 / 6 / 8 / 12 折</h3><p>以旋转复制构建放射式对称结构，折数变化会直接改变最终窗花的节奏与密度。</p></article>
        <article><span>MOTIF</span><h3>花 / 鸟 / 鱼 / 蝶 / 福</h3><p>每种纹样使用独立 SVG 几何结构，并与 Pattern Lab 的文化寓意、结构与地域信息联动。</p></article>
        <article><span>EXPORT</span><h3>SVG 作品导出</h3><p>用户完成参数组合后可直接下载生成结果，使实验室从展示组件变成可完成一次创作的工具。</p></article>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="ENGINEERING" title="项目里的几个关键前端实现。">
      <div class="design-principles paper-principles">
        <article><span>01 · ECHARTS</span><h3>地图与图谱联动</h3><p>使用 GeoJSON 注册中国地图，并将省份选择、排行榜、摘要信息与关系图谱保持统一状态。</p></article>
        <article><span>02 · SVG</span><h3>参数化图形生成</h3><p>通过 SVG Mask、旋转复制和不同纹样单元组合，实现可调折数、密度、风格与配色的剪纸生成。</p></article>
        <article><span>03 · COMPONENTS</span><h3>模块化页面结构</h3><p>将地图、趋势图、流派关系、档案馆、生成器与 Pattern Lab 拆为独立组件，便于迭代与维护。</p></article>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="RESULT" title="完成核心功能闭环，并作为 V1.0 正式上线。" tinted>
      <div class="reflection-card reflection-card--paper">
        <p>最终版本聚焦最能代表项目价值的四个核心模块。相比早期课程型 H5，V1.0 更强调清晰的信息架构、可验证的数据交互和能够真正操作的数字剪纸体验。</p>
        <p>项目已完成 GitHub 仓库与 GitHub Pages 在线部署，可直接从作品集进入体验完整版本。</p>
      </div>
      <div class="case-actions paper-result-actions">
        <a class="primary-btn" href="https://gielensras471-creator.github.io/paper-cutting-visualization/" target="_blank" rel="noreferrer">打开在线项目 ↗</a>
        <a class="secondary-btn" href="https://github.com/gielensras471-creator/paper-cutting-visualization" target="_blank" rel="noreferrer">查看 GitHub ↗</a>
      </div>
    </CaseStudySection>
  </div>
</template>

<script setup lang="ts">
import CaseStudyHero from '../../components/CaseStudyHero.vue'
import CaseStudySection from '../../components/CaseStudySection.vue'
</script>
