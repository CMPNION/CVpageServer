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
  image: ''
}

export const projects: IProject[] = [cmpnionspace]

export default projects
