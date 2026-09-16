<template>
  <div class="page home-page">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">2027 GRADUATE · SHENZHEN</p>
        <h1>
          Frontend Developer
          <span>with UI/UX Design Skills.</span>
        </h1>
        <p class="hero-lead">
          你好，我是刘浩瀚。数字媒体技术本科生，主要方向是 Vue 3 / TypeScript
          前端开发， 同时具备 UI/UX、数据可视化与交互设计能力。
        </p>
        <div class="hero-actions">
          <a class="primary-btn" href="#works">查看作品</a>
          <a
            class="secondary-btn"
            href="https://github.com/gielensras471-creator"
            target="_blank"
            rel="noreferrer"
            >GitHub ↗</a
          >
          <a
            class="text-btn"
            href="/resume/刘浩瀚_前端开发实习生_简历.docx"
            download
            >下载简历 ↓</a
          >
        </div>
      </div>

      <div class="hero-visual" aria-label="精选作品预览">
        <RouterLink
          to="/projects/hireflow"
          class="hero-project hero-project--main"
        >
          <img
            src="/assets/images/hireflow-detail.png"
            alt="HireFlow 招聘流程协作平台"
          />

          <div class="hero-project-overlay">
            <div>
              <span>01 · FRONTEND</span>
              <strong>HireFlow</strong>
            </div>

            <small>Vue 3 · TypeScript</small>
          </div>
        </RouterLink>

        <RouterLink
          to="/projects/maixiang-health"
          class="hero-project hero-project--health"
        >
          <img
            src="/assets/images/maixiang-cover.jpg"
            alt="脉向健康 UI UX 设计"
          />

          <div class="hero-project-label">
            <span>03</span>
            <strong>脉向健康</strong>
            <small>UI / UX Case Study</small>
          </div>
        </RouterLink>

        <RouterLink
          to="/projects/liuli-workshop"
          class="hero-project hero-project--liuli"
        >
          <img src="/assets/images/liuli-cover.jpg" alt="琉琉工坊 UI UX 设计" />

          <div class="hero-mini-title">
            <span>04</span>
            <strong>琉琉工坊</strong>
          </div>
        </RouterLink>

        <RouterLink
          to="/projects/paper-cutting"
          class="hero-project hero-project--paper"
        >
          <img
            src="/assets/images/paper-cutting-heritage.png"
            alt="中国剪纸数字文化可视化"
          />

          <div class="hero-mini-title">
            <span>02</span>
            <strong>中国剪纸</strong>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="statement-strip" aria-label="能力概览">
      <span>Frontend Engineering</span>
      <span>Data Visualization</span>
      <span>UI / UX Design</span>
      <span>Product Thinking</span>
    </section>

    <section class="works-section" id="works">
      <div class="section-heading">
        <div>
          <p class="eyebrow">SELECTED WORKS</p>
          <h2>一些能够代表我的作品。</h2>
        </div>
        <p>开发项目看工程与业务，设计项目看过程与判断。</p>
      </div>
      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>

    <section class="about-section" id="about">
      <div class="section-heading">
        <div>
          <p class="eyebrow">ABOUT</p>
          <h2>前端是主能力，设计是差异化。</h2>
        </div>
      </div>
      <div class="about-grid">
        <div class="about-copy">
          <p>
            我目前主要关注 Vue 3、TypeScript
            与现代前端工程实践。相比只做静态页面，我更喜欢把需求拆成真实的业务流程，
            再通过组件、状态和 API 把它完整实现出来。
          </p>
          <p>
            数字媒体技术背景让我同时具备
            Figma、信息架构、视觉规范、交互原型与数据可视化经验，能够更顺畅地在“设计—开发”之间协作。
          </p>
        </div>
        <div class="skill-cloud">
          <span>Vue 3</span><span>TypeScript</span><span>JavaScript</span
          ><span>Pinia</span> <span>Vue Router</span><span>Axios</span
          ><span>ECharts</span><span>Vite</span> <span>HTML / CSS</span
          ><span>Responsive</span><span>Git</span><span>Figma</span>
          <span>UI/UX</span><span>Design System</span><span>Adobe XD</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects";
</script>
