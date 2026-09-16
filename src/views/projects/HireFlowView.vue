<template>
  <div class="page case-page">
    <CaseStudyHero
      eyebrow="01 · FRONTEND ENGINEERING"
      title="HireFlow 招聘流程协作平台"
      lead="一个围绕职位、候选人、面试和招聘阶段推进构建的企业后台项目。重点不是堆页面，而是把业务状态、REST API、组件化与工程体验连成一个可演示的完整流程。"
      :tags="['Vue 3', 'TypeScript', 'Pinia', 'Axios', 'Element Plus', 'ECharts']"
      accent="#2254f4"
      demo="https://hireflow-wed.onrender.com"
      github="https://github.com/gielensras471-creator/hireflow"
    />

    <section class="case-cover case-cover--blue">
      <img src="/assets/images/hireflow-detail.png" alt="HireFlow 候选人详情页面" />
    </section>

    <CaseStudySection eyebrow="OVERVIEW" title="从后台模板改造到真实招聘业务流。">
      <div class="two-column-copy">
        <p>项目围绕招聘场景重新组织信息架构，拆分 Dashboard、职位、候选人、面试和个人中心，并用统一的招聘阶段规则串联多个模块。</p>
        <p>线上演示通过 Render 部署 Vue 前端与 json-server Mock REST API，能够真实体验增删改查、阶段推进、面试状态和数据联动。</p>
      </div>
      <div class="metrics-grid">
        <div><strong>3</strong><span>核心业务实体</span></div>
        <div><strong>5</strong><span>招聘阶段</span></div>
        <div><strong>4</strong><span>REST 方法</span></div>
        <div><strong>100%</strong><span>线上可体验</span></div>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="WORKFLOW" title="把状态流转当作业务，而不是按钮。" tinted>
      <div class="flow-line">
        <span>筛选</span><b>→</b><span>初面</span><b>→</b><span>复面</span><b>→</b><span>Offer</span>
      </div>
      <p class="case-note">同时支持有效阶段进入“淘汰”，并集中维护安排面试、完成面试、终止状态等规则，减少跨页面判断不一致。</p>
    </CaseStudySection>

    <CaseStudySection eyebrow="ENGINEERING" title="项目里我重点处理的工程问题。">
      <div class="feature-grid">
        <article><span>01</span><h3>API 模块化</h3><p>Axios 请求层与 Position / Candidate / Interview / Dashboard API 分离，页面只处理业务状态。</p></article>
        <article><span>02</span><h3>状态体验</h3><p>Loading、Empty、Error、Retry 都有明确反馈，避免接口请求期间页面“无响应”。</p></article>
        <article><span>03</span><h3>Tabs 与路由</h3><p>候选人详情支持独立路由、刷新和动态 Tab 标题，多候选人并行处理更清晰。</p></article>
        <article><span>04</span><h3>部署闭环</h3><p>完成 Mock API、生产环境变量、SPA Rewrite、README、Lint / Build 与在线演示。</p></article>
      </div>
    </CaseStudySection>
  </div>
</template>

<script setup lang="ts">
import CaseStudyHero from '../../components/CaseStudyHero.vue'
import CaseStudySection from '../../components/CaseStudySection.vue'
</script>
