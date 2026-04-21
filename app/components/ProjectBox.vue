<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from '#i18n'
import type { IProject } from '../interfaces/project.interface'

const props = defineProps<{ project: IProject }>()

const { locale } = useI18n()
const localizedDescription = computed(() =>
  locale.value === 'ru' ? props.project.ru.description : props.project.en.description
)

const isModalOpen = ref(false)
const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div
    class="project_box"
    :style="project.image ? { backgroundImage: `url(${project.image})` } : {}"
  >
    <div class="project_info">
      <h3 class="project_title">{{ project.name }}</h3>
      <button type="button" class="project_link" @click="openModal">
        {{ $t('projects.learnMore') }}
      </button>
    </div>
  </div>

  <Teleport to="body">
    <div v-if="isModalOpen" class="modal_backdrop" @click.self="closeModal">
      <div class="modal_window" role="dialog" aria-modal="true">
        <button type="button" class="modal_close" @click="closeModal" aria-label="Close">×</button>
        <h4 class="modal_title">{{ project.name }}</h4>
        <p class="modal_text">{{ localizedDescription }}</p>
        <a :href="project.link" target="_blank" rel="noreferrer" class="modal_link">
          {{ $t('projects.visit') }}
        </a>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.project_box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  max-width: 400px;
  max-height: 400px;
  min-width: 400px;
  min-height: 200px;
  overflow: hidden;

  background-color: rgba(255, 255, 255, 0.03);
  background-size: cover; /* картинка растянута на 100% */
  background-position: center;
  background-repeat: no-repeat;
}

/* затемнение — без backdrop-filter, чтобы не было артефактов */
.project_box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: inherit;
}

.project_info {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  padding: 1.5rem; /* отступы теперь только здесь */
  width: 100%;
  box-sizing: border-box;
}

/* остальные стили без изменений */
.project_link {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: inherit;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.project_link:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
}

.project_link:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.modal_backdrop {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  z-index: 1000;
  animation: backdrop-fade 220ms ease-out;
}

.modal_window {
  width: 500px;
  height: 500px;
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.85rem;
  position: relative;
  animation: modal-pop 260ms ease-out;
}

.modal_close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.25rem;
  cursor: pointer;
}

.modal_title {
  margin: 0;
  font-size: 1.1rem;
}
.modal_text {
  margin: 0;
  opacity: 0.85;
  flex: 1;
}

.modal_link {
  align-self: center;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.55rem 1rem;
  border-radius: 999px;
  color: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

.modal_link:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
}

.modal_link:active {
  transform: translateY(0);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}

@keyframes modal-pop {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes backdrop-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .modal_backdrop,
  .modal_window,
  .project_link,
  .modal_link {
    animation: none;
    transition: none;
  }
}
</style>
