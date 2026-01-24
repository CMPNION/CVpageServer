<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink :to="localePath('/')" class="logo-link">
          <span class="logo-text">{{ typedText }}</span>
          <span class="logo-caret" :class="{ blinking: isTypingDone }" aria-hidden="true"></span>
        </NuxtLink>
      </div>
      <nav class="nav">
        <NuxtLink :to="localePath('/')" exact-active-class="active">{{ $t('nav.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/projects')" exact-active-class="active">{{
          $t('nav.projects')
        }}</NuxtLink>
        <a
          class="nav-link"
          href="https://t.me/cmpnion"
          target="_blank"
          rel="noreferrer"
        >
          {{ $t('nav.contacts') }}
        </a>
      </nav>
      <div class="locale">
        <button
          v-for="loc in locales"
          :key="loc.code"
          type="button"
          class="locale-link"
          :class="{ active: loc.code === locale }"
          @click="setLocale(loc.code)"
        >
          <span>{{ loc.name }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n, useLocalePath } from '#i18n'

const { locales, locale, setLocale } = useI18n()
const localePath = useLocalePath()

const fullBrand = 'cmpnion.space'
const typedText = ref('')
const isTypingDone = ref(false)
let typingTimer

const startTyping = () => {
  typedText.value = ''
  isTypingDone.value = false
  let index = 0

  const step = () => {
    typedText.value = fullBrand.slice(0, index + 1)
    index += 1

    if (index < fullBrand.length) {
      typingTimer = window.setTimeout(step, 90)
    } else {
      isTypingDone.value = true
    }
  }

  typingTimer = window.setTimeout(step, 120)
}

onMounted(startTyping)

onBeforeUnmount(() => {
  if (typingTimer) {
    window.clearTimeout(typingTimer)
  }
})
</script>

<style scoped>
.header {
  color: var(--color-text-primary);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.container {
  width: 100%;
  max-width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 1.5rem;
}

.logo {
  justify-self: start;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  justify-self: center;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: inherit;
  min-width: 100px;
}

.logo-text {
  letter-spacing: 0.08em;
  color: var(--color-accent-bright);
}

.logo-caret {
  width: 10px;
  height: 1.1em;
  background: var(--color-text-primary);
  display: inline-block;
  opacity: 1;
}

.logo-caret.blinking {
  animation: caret-blink 0.8s steps(2, start) infinite;
}

@keyframes caret-blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}

.nav a {
  color: var(--color-text-primary);
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 2px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.nav a:hover {
  color: var(--color-accent-success);
  border-bottom-color: var(--color-accent-bright);
  background: rgba(255, 255, 255, 0.06);
}

.locale {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: end;
  padding: 4px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(19, 9, 61, 0.6);
  backdrop-filter: blur(6px);
  margin-right: 0;
}

@media (max-width: 1024px) {
  .container {
    grid-template-columns: auto 1fr auto;
    padding: 0 1rem;
  }

  .nav {
    gap: 1rem;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 12px;
    justify-items: center;
  }

  .logo {
    justify-self: center;
  }

  .nav {
    justify-content: center;
  }

  .locale {
    justify-self: center;
  }
}

@media (max-width: 480px) {
  .nav a {
    padding: 6px 8px;
    font-size: 14px;
  }
}

.locale-link {
  position: relative;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 6px 12px;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.locale-link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(104, 218, 35, 0.35), rgba(76, 195, 91, 0.15));
  opacity: 0;
  transform: scale(0.85);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
  z-index: 0;
}

.locale-link span {
  position: relative;
  z-index: 1;
}

.locale-link:hover {
  color: var(--color-text-primary);
  border-color: var(--color-border);
  transform: translateY(-1px);
}

.locale-link.active {
  color: var(--color-text-primary);
  border-color: var(--color-accent-bright);
}

.locale-link.active::after {
  opacity: 1;
  transform: scale(1);
}
</style>
