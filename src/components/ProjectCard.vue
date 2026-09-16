<template>
  <article class="project-card" :style="{ '--accent': project.accent }">
    <RouterLink :to="project.route" class="project-visual" :aria-label="`查看 ${project.title}`">
      <img :src="project.image" :alt="`${project.title} 项目预览`" />
      <span class="project-number">{{ project.index }}</span>
    </RouterLink>

    <div class="project-meta">
      <div class="project-title-row">
        <div>
          <p class="project-type">{{ project.type }}</p>
          <h3>{{ project.title }} <span>{{ project.subtitle }}</span></h3>
        </div>
        <RouterLink :to="project.route" class="arrow-link" :aria-label="`进入 ${project.title}`">↗</RouterLink>
      </div>
      <p class="project-summary">{{ project.summary }}</p>
      <div class="tag-row">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="project-actions">
        <RouterLink :to="project.route">查看 Case Study</RouterLink>
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noreferrer">在线体验 ↗</a>
        <a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Project } from '../data/projects'

defineProps<{ project: Project }>()
</script>
