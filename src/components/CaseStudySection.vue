<template>
  <section class="case-section" :class="{ 'case-section--tinted': tinted }">
    <div class="case-section-head">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
    </div>
    <div class="case-section-body"><slot /></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; tinted?: boolean }>()
</script>
