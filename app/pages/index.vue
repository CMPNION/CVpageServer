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
  margin-top: 4rem;
}
.portrait {
  width: 30%;
  height: 500px;
  border: 2px solid var(--color-text-primary);
  margin: 0;
  padding: 0;
  background-image: url("../../public/me.png");
  background-size: cover;
  background-position: center;
  border-radius: 5%;
}
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 50%;
  white-space: pre-line;
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
