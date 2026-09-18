<template>
  <div class="page home-page">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">2027 GRADUATE · FRONTEND · SHENZHEN</p>
        <h1>
          Frontend Developer
          <span>with UI/UX Design Skills.</span>
        </h1>
        <p class="hero-lead">
          你好，我是刘浩瀚，数字媒体技术本科生，求职方向为前端开发。
          主要使用 Vue 3 / TypeScript 构建业务型 Web 应用，
          具备 Node.js / Express 前后端联调、ECharts 数据可视化与 UI/UX 设计实践。
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
          <a class="text-btn" :href="resumeUrl" download>下载简历 ↓</a>
        </div>
      </div>

      <div class="hero-visual" aria-label="精选作品预览">
        <RouterLink
          to="/projects/hireflow"
          class="hero-project hero-project--main"
        >
          <img
            :src="assetUrl('assets/images/hireflow-dashboard.png')"
            alt="HireFlow 招聘流程协作平台"
          />

          <div class="hero-project-overlay">
            <div>
              <span>01 · FRONTEND / FULL-STACK</span>
              <strong>HireFlow</strong>
            </div>

            <small>Vue 3 · TypeScript · Express</small>
          </div>
        </RouterLink>

        <RouterLink
          to="/projects/maixiang-health"
          class="hero-project hero-project--health"
        >
          <img
            :src="assetUrl('assets/images/maixiang-cover.jpg')"
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
          <img
            :src="assetUrl('assets/images/liuli-cover.jpg')"
            alt="琉琉工坊 UI UX 设计"
          />

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
            :src="assetUrl('assets/images/paper-cutting-heritage.png')"
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
      <span>Full-stack Practice</span>
      <span>Data Visualization</span>
      <span>UI / UX Design</span>
    </section>

    <section class="works-section" id="works">
      <div class="section-heading">
        <div>
          <p class="eyebrow">SELECTED WORKS</p>
          <h2>一些能够代表我的作品。</h2>
        </div>
        <p>以开发项目展示工程与业务能力，以设计项目补充产品与视觉判断。</p>
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
            我主要关注 Vue 3、TypeScript 与现代前端工程实践。
            相比只完成静态页面，我更希望把需求拆成真实业务流程，
            通过组件、状态管理、路由和 API 将功能完整落地。
            HireFlow 中进一步使用 Node.js + Express、JWT 与 SQLite
            完成了真实后端、登录鉴权和数据持久化。
          </p>

          <p>
            数字媒体技术背景让我同时具备 UI/UX、信息架构、
            数据可视化与交互设计经验。我的求职方向仍然是前端开发，
            设计能力更多作为理解产品、还原界面和优化体验的补充。
          </p>
        </div>

        <div class="skill-cloud">
          <span>Vue 3</span><span>TypeScript</span><span>JavaScript</span>
          <span>Pinia</span><span>Vue Router</span><span>Axios</span>
          <span>Node.js</span><span>Express</span><span>REST API</span>
          <span>JWT</span><span>SQLite</span><span>ECharts</span>
          <span>Vite</span><span>HTML / CSS</span><span>Responsive</span>
          <span>Git</span><span>Figma</span><span>UI/UX</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects";

const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const resumeUrl =
  `${import.meta.env.BASE_URL}resume/刘浩瀚_前端开发实习生_简历.pdf`;
</script>
