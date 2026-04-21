import type { IProject } from '~/interfaces/project.interface'

const cmpnionspace: IProject = {
  name: 'cmpnion.space',
  ru: {
    description: 'Мой личный веб-сайт для публикации моих проектов'
  },
  en: {
    description: 'My personal website for publishing my projects'
  },
  stack: ['Nuxt', 'I18N', 'CSS'],
  link: 'https://cmpnion.space',
  image:
    'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8mpeku6brwkfmrsumu3h.png'
}

const bullmini: IProject = {
  name: 'bull-mini',
  ru: {
    description:
      'Надежная, строго типизированная (Generics) фоновая очередь задач для Go на основе Redis.'
  },
  en: {
    description:
      'Enterprise-grade, strictly typed, and highly reliable Redis-backed background job queue for Go.'
  },
  stack: ['Go', 'Redis', 'Clean Architecture'],
  link: 'https://github.com/CMPNION/bull-mini',
  image: 'https://e0.pxfuel.com/wallpapers/556/782/desktop-wallpaper-golang-golang-gopher.jpg'
}

export const projects: IProject[] = [cmpnionspace, bullmini]

export default projects
