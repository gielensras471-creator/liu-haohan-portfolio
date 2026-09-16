<template>
  <div class="page case-page case-page--health">
    <CaseStudyHero
      eyebrow="03 · UI / UX CASE STUDY"
      title="脉向健康 · 家庭健康管理 App"
      lead="蓝桥杯参赛 UI/UX 方案。项目基于此前参与的企业 UI 设计专利申请相关方案进一步延展，从产品功能梳理、竞品研究到视觉系统与核心页面，重新构建面向个人与家庭成员的全年龄健康管理体验。"
      :tags="['Adobe XD', 'UI / UX', 'Product Thinking', 'Design System', 'Mobile App']"
      accent="#22b978"
    />

    <section class="case-meta-grid" aria-label="项目基本信息">
      <div><span>PROJECT</span><strong>蓝桥杯参赛设计</strong></div>
      <div><span>ROLE</span><strong>产品 / UI / UX 设计</strong></div>
      <div><span>FOCUS</span><strong>个人 + 家庭健康管理</strong></div>
      <div><span>DELIVERABLE</span><strong>产品框架 · 高保真 · 设计规范</strong></div>
    </section>

    <section class="case-cover maixiang-cover case-cover--portrait-poster">
      <img src="/assets/images/maixiang-poster-visual.webp" alt="脉向健康视觉设计与核心页面海报" />
    </section>

    <CaseStudySection eyebrow="01 · OVERVIEW" title="从个人数据记录，走向家庭健康协同。">
      <div class="two-column-copy">
        <p>
          方案聚焦“全年龄段个人 + 家庭”的健康管理场景，希望解决个人与家庭健康数据分散、分析复杂、持续管理困难的问题。产品以数据记录、分析与提醒为基础，再向家庭协同和健康服务延伸。
        </p>
        <p>
          设计没有把页面做成单纯的运动打卡工具，而是围绕健康数据、健康助手、健康服务和个人中心四条主线组织信息，并通过亲友绑定、家人数据看板和智能识别建立差异化体验。
        </p>
      </div>
      <div class="insight-grid">
        <article><span>01</span><h3>个人健康</h3><p>记录步数、热量、睡眠、运动与基础身体指标。</p></article>
        <article><span>02</span><h3>家庭协同</h3><p>绑定亲友并查看简化健康数据，强化家庭关怀。</p></article>
        <article><span>03</span><h3>健康助手</h3><p>通过日报、提醒与建议降低理解健康数据的门槛。</p></article>
        <article><span>04</span><h3>智能录入</h3><p>将扫一扫、食物、报告与体测识别整合为统一入口。</p></article>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="02 · RESEARCH" title="先定义问题，再决定页面应该长什么样。" tinted>
      <div class="case-split case-split--research">
        <div class="research-copy">
          <p class="case-kicker">竞品与产品判断</p>
          <h3>健康应用的难点，不只是“数据多”，而是数据难理解、家庭难协同。</h3>
          <p>
            设计阶段参考运动与健康类产品的数据记录、趋势分析和设备同步方式，并将“家庭”作为重要补充场景。相比只服务单个用户，脉向健康进一步考虑父母、孩子和配偶之间的数据查看与提醒关系。
          </p>
          <div class="research-points">
            <div><strong>认知减负</strong><span>减少一次展示的指标数量，用卡片和状态色突出重点。</span></div>
            <div><strong>家庭连接</strong><span>让亲友健康信息可见，但保持层级清晰，避免首页过载。</span></div>
            <div><strong>持续反馈</strong><span>把数据转成提醒、趋势和建议，而不是只显示数字。</span></div>
          </div>
        </div>
        <img class="research-poster" src="/assets/images/maixiang-poster-research.webp" alt="脉向健康产品框架、竞品分析、用户画像和用户旅程" />
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="03 · INFORMATION ARCHITECTURE" title="四个主模块承接不同层级的健康需求。">
      <div class="architecture-grid architecture-grid--health">
        <article><span>01</span><h3>健康数据</h3><p>今日数据、热量盈亏、智能识别、运动记录。</p></article>
        <article><span>02</span><h3>健康助手</h3><p>个人健康档案、家人数据、健康小秘书与分人群健康助手。</p></article>
        <article><span>03</span><h3>健康服务</h3><p>附近场馆、上门体育、健康用品、营养餐与康养服务。</p></article>
        <article><span>04</span><h3>个人中心</h3><p>家庭、设备绑定、服务订单、消息和任务等长期管理入口。</p></article>
      </div>
      <div class="journey-line">
        <span>注册 / 建档</span><b>→</b><span>绑定设备与亲友</span><b>→</b><span>查看健康数据</span><b>→</b><span>获得建议</span><b>→</b><span>长期留存</span>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="04 · DESIGN SYSTEM" title="用绿色建立信任感，用功能色降低识别成本。" tinted>
      <div class="palette-row palette-row--health">
        <div style="--swatch:#34c687"><span>#34C687</span></div>
        <div style="--swatch:#1cab72"><span>#1CAB72</span></div>
        <div style="--swatch:#f4f5f4"><span>#F4F5F4</span></div>
        <div style="--swatch:#4fa2ff"><span>#4FA2FF</span></div>
        <div style="--swatch:#ff8904"><span>#FF8904</span></div>
        <div style="--swatch:#ac45ff"><span>#AC45FF</span></div>
      </div>
      <div class="design-principles">
        <article><span>TYPE</span><h3>思源黑体</h3><p>36 / 24 / 20 / 16 / 12px 五级字号，控制移动端信息密度。</p></article>
        <article><span>SHAPE</span><h3>圆润卡片</h3><p>大圆角与轻投影降低医疗感，让健康管理更日常。</p></article>
        <article><span>COLOR</span><h3>功能色编码</h3><p>橙、蓝、紫分别辅助饮食、报告和体测等功能识别。</p></article>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="05 · CORE EXPERIENCE" title="首页负责看状态，健康助手负责把数据变成行动。">
      <div class="screen-story screen-story--health">
        <img src="/assets/images/maixiang-assistant.webp" alt="脉向健康健康助手页面" />
        <div class="screen-story-copy">
          <p class="case-kicker">HEALTH ASSISTANT</p>
          <h3>把分散的健康信息压缩成几张高频卡片。</h3>
          <p>个人档案、家人数据、健康小秘书和每日提醒被放在同一条浏览路径中，让用户先看异常与建议，再决定是否进入详情。</p>
          <div class="mini-tags"><span>健康档案</span><span>家人数据</span><span>营养提醒</span><span>运动提醒</span></div>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="06 · FAMILY & RECOGNITION" title="家庭关怀与智能识别，是这套产品最有辨识度的两组场景。" tinted>
      <div class="gallery-grid gallery-grid--two case-gallery--contained">
        <figure>
          <img src="/assets/images/maixiang-family-recognition.webp" alt="家庭、消息和智能识别界面" />
          <figcaption>家庭成员 / 消息私信 / 智能识别</figcaption>
        </figure>
        <figure>
          <img src="/assets/images/maixiang-exercise.webp" alt="运动记录界面" />
          <figcaption>运动概览 / 记录 / 建议</figcaption>
        </figure>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="07 · FINAL SCREENS" title="从登录到数据、助手与服务，形成一套统一的移动端视觉语言。">
      <div class="final-showcase final-showcase--health">
        <img src="/assets/images/maixiang-flow-screens.webp" alt="脉向健康核心页面组合" />
        <img src="/assets/images/maixiang-login-mockup.webp" alt="脉向健康登录页手机效果图" />
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="08 · REFLECTION" title="这次设计让我从“画页面”转向“组织产品体验”。" tinted>
      <div class="reflection-card">
        <p>
          相比只关注单页视觉，我更关注信息架构、家庭用户关系和跨页面状态的一致性。作品中的部分插画、图标与效果素材使用了 AIGC 辅助生成，但产品结构、页面布局、视觉规范和交互组织均围绕完整的健康管理场景重新设计。
        </p>
        <p class="case-disclaimer">说明：本项目为 UI/UX 概念与比赛展示方案，不代表真实医疗诊断产品；智能识别与健康建议均以产品交互概念呈现。</p>
      </div>
    </CaseStudySection>
  </div>
</template>

<script setup lang="ts">
import CaseStudyHero from '../../components/CaseStudyHero.vue'
import CaseStudySection from '../../components/CaseStudySection.vue'
</script>
