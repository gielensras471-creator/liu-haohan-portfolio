<template>
  <section class="case-hero" :style="{ '--case-accent': accent }">
    <RouterLink to="/" class="back-link">← 返回作品集</RouterLink>
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p class="case-lead">{{ lead }}</p>
    <div class="tag-row case-tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div v-if="demo || github" class="case-actions">
      <a v-if="demo" class="primary-btn" :href="demo" target="_blank" rel="noreferrer">在线体验 ↗</a>
      <a v-if="github" class="secondary-btn" :href="github" target="_blank" rel="noreferrer">GitHub ↗</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  eyebrow: string
  title: string
  lead: string
  tags: string[]
  accent: string
  demo?: string
  github?: string
}>()
</script>
