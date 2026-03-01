export interface IProject {
  name: string
  ru: ILanguage
  en: ILanguage
  stack: string[]
  link: string
  image: string
}

interface ILanguage {
  description: string
}
