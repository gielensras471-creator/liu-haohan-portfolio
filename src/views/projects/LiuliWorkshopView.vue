<template>
  <div class="page case-page case-page--liuli">
    <CaseStudyHero
      eyebrow="04 · UI / UX CASE STUDY"
      title="琉琉工坊 · 非遗数字体验小程序"
      lead="以琉陶非遗文化为主题的移动端数字体验方案。项目希望把知识传播、传习课程、虚拟工坊与 AR / AI 概念交互连接起来，让用户从“看文化”进一步走向“学工艺、参与创作”。"
      :tags="['Adobe XD', 'UI / UX', 'Information Architecture', 'AR Concept', 'Cultural Design']"
      accent="#d99e66"
    />

    <section class="case-meta-grid case-meta-grid--warm" aria-label="项目基本信息">
      <div><span>PROJECT</span><strong>非遗数字体验设计</strong></div>
      <div><span>ROLE</span><strong>项目负责人 / UI·UX 设计</strong></div>
      <div><span>FOCUS</span><strong>文化传播 + 互动体验</strong></div>
      <div><span>DELIVERABLE</span><strong>架构 · 原型 · 视觉规范</strong></div>
    </section>

    <section class="case-cover liuli-cover case-cover--portrait-poster case-cover--warm">
      <img src="/assets/images/liuli-overview.webp" alt="琉琉工坊产品概览、用户画像与信息架构" />
    </section>

    <CaseStudySection eyebrow="01 · CONTEXT" title="非遗传播的挑战，不只是把内容搬到手机里。">
      <div class="two-column-copy">
        <p>
          琉陶工艺具有明显的文化和专业门槛：传统知识难被年轻用户持续阅读，复杂工序也很难仅靠文字和图片理解。因此设计目标不是做一个“资料库”，而是建立从发现、学习到虚拟体验的完整路径。
        </p>
        <p>
          产品以首页、工坊、课堂和个人中心为骨架，结合精品展厅、视频课程、互动实验和创作工具，让不同熟悉程度的用户都能找到合适的进入方式。
        </p>
      </div>
      <div class="insight-grid insight-grid--warm">
        <article><span>01</span><h3>文化内容</h3><p>用文章、展厅与节庆内容降低第一次接触门槛。</p></article>
        <article><span>02</span><h3>传习课堂</h3><p>通过视频、工艺解密和互动实验形成连续学习路径。</p></article>
        <article><span>03</span><h3>虚拟工坊</h3><p>将 AR、AI 问答与工艺分析作为参与式体验入口。</p></article>
        <article><span>04</span><h3>个人沉淀</h3><p>收藏、徽章和学习记录承接长期使用与分享。</p></article>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="02 · PRODUCT STRUCTURE" title="从“首页入口”到“工坊体验”，信息架构围绕任务而不是栏目堆叠。" tinted>
      <div class="architecture-grid architecture-grid--liuli">
        <article><span>首页</span><h3>发现文化</h3><p>直播、咨询、文章和核心模块入口。</p></article>
        <article><span>工坊</span><h3>参与创作</h3><p>AI 问答、AR 预览与工艺分析。</p></article>
        <article><span>课堂</span><h3>学习工艺</h3><p>视频课程、互动实验与工艺解密。</p></article>
        <article><span>我的</span><h3>沉淀成果</h3><p>收藏、徽章、设置和个人学习记录。</p></article>
      </div>
      <div class="journey-line journey-line--warm">
        <span>认知接触</span><b>→</b><span>内容浏览</span><b>→</b><span>深度学习</span><b>→</b><span>虚拟创作</span><b>→</b><span>收藏分享</span>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="03 · DESIGN SYSTEM" title="暖金与浅粉建立手工艺温度，深色文字承担信息稳定感。">
      <div class="liuli-system-layout">
        <div>
          <div class="palette-row palette-row--liuli">
            <div style="--swatch:#f9eaea"><span>#F9EAEA</span></div>
            <div style="--swatch:#d99e66"><span>#D99E66</span></div>
            <div style="--swatch:#333333"><span>#333333</span></div>
            <div style="--swatch:#949494"><span>#949494</span></div>
          </div>
          <div class="design-principles design-principles--two">
            <article><span>COMPONENTS</span><h3>卡片化内容</h3><p>将工艺、课程与作品统一到可复用卡片结构中。</p></article>
            <article><span>ICONS</span><h3>简洁导航</h3><p>导航采用简洁线性图标，内容区允许更具文化感的图像。</p></article>
          </div>
        </div>
        <img src="/assets/images/liuli-screens.webp" alt="琉琉工坊核心页面与创新模块海报" />
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="04 · CORE EXPERIENCE" title="核心体验不是单个页面，而是一条从学习到创作的路径。" tinted>
      <div class="experience-steps">
        <article><span>01</span><h3>发现</h3><p>通过首页轮播、资讯和精品展厅建立文化认知。</p></article>
        <article><span>02</span><h3>学习</h3><p>在传习课堂观看多机位教学，理解关键工艺步骤。</p></article>
        <article><span>03</span><h3>实验</h3><p>通过互动实验调整温度、时间与材料参数，理解工艺变量。</p></article>
        <article><span>04</span><h3>创作</h3><p>进入工坊进行图像分析、参数调整和 AR 预览概念体验。</p></article>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="05 · SIGNATURE FEATURE" title="AR 工坊让用户从“阅读非遗”转向“参与非遗”。">
      <div class="signature-feature">
        <div class="signature-flow">
          <span>选择作品</span><b>→</b><span>图像分析</span><b>→</b><span>调整参数</span><b>→</b><span>AR 预览</span><b>→</b><span>保存分享</span>
        </div>
        <div class="signature-copy">
          <p>这一功能承担整个方案的记忆点。它把作品浏览、数字分析和虚拟展示串成连续操作，让文化内容不再停留在被动阅读。</p>
          <p class="case-disclaimer">AR、AI 与 3D 仿真在本项目中属于 UI/UX 概念设计与交互方案，并非已完成开发的生产功能。</p>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="06 · FINAL DESIGN" title="低保真、视觉规范与关键页面，被整理成一套完整设计交付。" tinted>
      <div class="liuli-final-grid">
        <figure class="liuli-longboard">
          <img src="/assets/images/liuli-longboard.webp" alt="琉琉工坊完整 UI 设计长图" />
          <figcaption>完整 UI Design Board</figcaption>
        </figure>
        <div class="liuli-final-copy">
          <p class="case-kicker">DELIVERABLES</p>
          <h3>从结构、规范到高保真页面，而不是只做几张效果图。</h3>
          <div class="research-points research-points--warm">
            <div><strong>低保真</strong><span>先明确首页、课堂、工坊和内容页的信息层级。</span></div>
            <div><strong>组件规范</strong><span>统一按钮、卡片、图标与图片比例，降低页面之间的视觉跳跃。</span></div>
            <div><strong>关键页面</strong><span>覆盖首页、工坊、课堂、内容、AR 体验与个人模块。</span></div>
            <div><strong>交互反馈</strong><span>考虑点赞收藏状态、参数调节和一键预览等反馈。</span></div>
          </div>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="07 · REFLECTION" title="传统文化产品需要同时尊重内容与现代交互习惯。">
      <div class="reflection-card reflection-card--warm">
        <p>
          这次设计让我更重视“文化内容如何被理解”而不仅是视觉装饰。通过卡片化、任务路径和虚拟工坊概念，我尝试把专业工艺知识拆成更容易进入的学习与体验节点。
        </p>
        <p>
          项目为团队设计实践，作品集以本人作为项目负责人和 UI/UX 设计视角呈现，不在页面中展开其他成员信息。
        </p>
      </div>
    </CaseStudySection>
  </div>
</template>

<script setup lang="ts">
import CaseStudyHero from '../../components/CaseStudyHero.vue'
import CaseStudySection from '../../components/CaseStudySection.vue'
</script>
