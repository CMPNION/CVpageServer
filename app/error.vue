<template>
<div class="error-page">
    <div class="glitch" :data-text="title">{{ title }}</div>
    <p class="subtitle">{{ subtitle }}</p>
    <div class="actions">
      <NuxtLink class="btn" :to="localePath('/')">{{ backHome }}</NuxtLink>
    </div>
    <p class="code">{{ errorCode }}</p>
  </div>
</template>

<script setup>
import { useI18n, useLocalePath } from '#i18n'
import { computed } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()

const props = defineProps({
  error: {
    type: Object,
    default: () => ({})
  }
})

const errorCode = computed(() => props.error?.statusCode || 404)
const title = computed(() => t('errors.title'))
const subtitle = computed(() => t('errors.subtitle'))
const backHome = computed(() => t('errors.backHome'))

useHead(() => ({
  title: title.value
}))
</script>

<style scoped>
.error-page {
  min-height: calc(100vh - 120px);
  display: grid;
  place-content: center;
  gap: 16px;
  text-align: center;
  padding: 40px 24px;
  color: var(--color-text-primary);
}

.glitch {
  position: relative;
  font-size: clamp(32px, 6vw, 72px);
  font-weight: 800;
  letter-spacing: 0.08em;
    white-space: pre-line;
  text-transform: uppercase;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  color: var(--color-text-primary);
  background: transparent;
}

.glitch::before {
  text-shadow: -2px 0 var(--color-accent-success);
  animation: glitch-left 1.4s infinite linear alternate-reverse;
}

.glitch::after {
  text-shadow: 2px 0 var(--color-accent-bright);
  animation: glitch-right 1.2s infinite linear alternate-reverse;
}

.subtitle {
  color: var(--color-text-secondary);
  max-width: 520px;
  margin: 0 auto;
}

.actions {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: rgba(65, 40, 85, 0.4);
  color: var(--color-text-primary);
  font-weight: 600;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

.code {
  color: var(--color-text-secondary);
  letter-spacing: 0.2em;
}

@keyframes glitch-left {
  0% {
    clip-path: inset(0 0 65% 0);
    transform: translate(-2px, -1px);
  }
  20% {
    clip-path: inset(10% 0 55% 0);
    transform: translate(2px, 1px);
  }
  40% {
    clip-path: inset(45% 0 35% 0);
    transform: translate(-1px, 0);
  }
  60% {
    clip-path: inset(30% 0 50% 0);
    transform: translate(1px, -1px);
  }
  80% {
    clip-path: inset(60% 0 20% 0);
    transform: translate(-2px, 1px);
  }
  100% {
    clip-path: inset(50% 0 40% 0);
    transform: translate(0, 0);
  }
}

@keyframes glitch-right {
  0% {
    clip-path: inset(65% 0 0 0);
    transform: translate(2px, 1px);
  }
  20% {
    clip-path: inset(55% 0 10% 0);
    transform: translate(-2px, 0);
  }
  40% {
    clip-path: inset(35% 0 45% 0);
    transform: translate(1px, -1px);
  }
  60% {
    clip-path: inset(50% 0 30% 0);
    transform: translate(-1px, 1px);
  }
  80% {
    clip-path: inset(20% 0 60% 0);
    transform: translate(2px, -1px);
  }
  100% {
    clip-path: inset(40% 0 50% 0);
    transform: translate(0, 0);
  }
}
</style>
