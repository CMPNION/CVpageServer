<template>
  <div class="personal_box">
    <div class="portrait"></div>
    <div class="description">
      <p>{{ $t('projects.description') }}</p>
    </div>
  </div>

  <div class="projects">
    <ProjectBox v-for="project in projects" :key="project.name" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/static_data/projects'
</script>

<style scoped>
.description.description {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.projects {
  margin: 4rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  padding: 0 1.5rem;
}
</style>
