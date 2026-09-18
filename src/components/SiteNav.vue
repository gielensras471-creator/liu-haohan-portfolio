<template>
  <header class="site-nav">
    <RouterLink to="/" class="brand" aria-label="返回首页">
      <span class="brand-mark">LH</span>
      <span class="brand-copy">
        <strong>刘浩瀚</strong>
        <small>Frontend Developer · UI/UX</small>
      </span>
    </RouterLink>

    <nav class="nav-links" aria-label="主导航">
      <RouterLink to="/">作品</RouterLink>
      <a :href="`${baseUrl}#about`">关于</a>
      <a :href="`${baseUrl}#contact`">联系</a>
      <a class="nav-cta" :href="resumeUrl" download>下载简历</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const baseUrl = import.meta.env.BASE_URL
const resumeUrl = `${baseUrl}resume/刘浩瀚_前端开发实习生_简历.pdf`
</script>
