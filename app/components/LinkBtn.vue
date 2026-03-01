<template>
  <NuxtLink v-if="to" :to="to" class="link-btn" v-bind="attrs">
    <slot />
  </NuxtLink>
  <a v-else :href="href" class="link-btn" v-bind="anchorAttrs">
    <slot />
  </a>
</template>

<script setup>
import { computed, useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  isExternal: {
    type: Boolean,
    default: false
  }
})

const attrs = useAttrs()

const anchorAttrs = computed(() => {
  const base = { ...attrs }

  if (props.isExternal) {
    base.target = base.target || '_blank'
    base.rel = base.rel || 'noreferrer'
  }

  return base
})
</script>

<style scoped>
.link-btn {
  color: var(--color-text-primary);
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.link-btn:hover {
  color: var(--color-accent-success);
  border-bottom-color: var(--color-accent-bright);
  background: rgba(255, 255, 255, 0.06);
}

.link-btn.active {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-accent-bright);
  background: rgba(255, 255, 255, 0.07);
}

@media (max-width: 480px) {
  .link-btn {
    padding: 6px 8px;
    font-size: 14px;
  }
}
</style>
