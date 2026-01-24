<template>
  <div class="page">
    <div class="personal_box">
      <div class="portrait"></div>
      <div class="description">
        <h2>{{ $t('personal.greet') }}</h2>
        <p>{{ $t('personal.description') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.personal_box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 4rem auto 0;
  max-width: 1100px;
  padding: 0 1.5rem;
}
.portrait {
  width: clamp(220px, 30vw, 360px);
  aspect-ratio: 1 / 1;
  min-width: 220px;
  border: 2px solid var(--color-text-primary);
  margin: 0;
  padding: 0;
  background-image: url("/me.png");
  background-size: cover;
  background-position: center;
  border-radius: 5%;
  flex: 0 0 auto;
}
.description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 560px;
  flex: 1 1 320px;
  white-space: pre-line;
}

@media (max-width: 900px) {
  .personal_box {
    flex-direction: column;
    align-items: center;
  }

  .description {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .portrait {
    width: min(260px, 85vw);
  }
}
</style>

<script setup lang="ts">
import { useI18n } from '#i18n'
import { computed } from 'vue'

const { t } = useI18n()
const title = computed(() => t('nav.home'))

useHead(() => ({
  title: title.value
}))
</script>
