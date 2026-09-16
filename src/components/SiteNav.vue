<template>
  <header class="site-nav">
    <RouterLink to="/" class="brand" aria-label="返回首页">
      <span class="brand-mark">LH</span>
      <span class="brand-copy">
        <strong>刘浩瀚</strong>
        <small>Frontend · UI/UX</small>
      </span>
    </RouterLink>

    <nav class="nav-links" aria-label="主导航">
      <RouterLink to="/">作品</RouterLink>
      <a href="/#about">关于</a>
      <a href="/#contact">联系</a>
      <a class="nav-cta" href="/resume/刘浩瀚_前端开发实习生_简历.docx" download>下载简历</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
