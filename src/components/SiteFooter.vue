<template>
  <footer class="site-footer" id="contact">
    <div>
      <p class="eyebrow">CONTACT</p>
      <h2>如果你正在寻找前端开发实习生，欢迎联系我。</h2>
    </div>
    <div class="footer-links">
      <a href="mailto:liuhaohan2026@163.com">liuhaohan2026@163.com</a>
      <a href="https://github.com/gielensras471-creator" target="_blank" rel="noreferrer">GitHub ↗</a>
      <a :href="resumeUrl" download>下载简历 ↓</a>
    </div>
    <p class="copyright">© 2026 刘浩瀚 · Built with Vue 3 + TypeScript</p>
  </footer>
</template>

<script setup lang="ts">
const resumeUrl = `${import.meta.env.BASE_URL}resume/刘浩瀚_前端开发实习生_简历.pdf`
</script>
