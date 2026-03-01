<template>
  <button type="button" class="locale-link" :class="{ active: isActive }" @click="onClick">
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const onClick = () => emit('click')
</script>

<style scoped>
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
