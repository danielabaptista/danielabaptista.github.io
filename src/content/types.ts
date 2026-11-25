export type Lang = 'en' | 'de'

export type Link = { label: string; url: string }

export type Entry = {
  dates: string
  title: string
  place?: string
  // A string is shown as a paragraph, a list of strings as bullet points.
  text?: string | string[]
  link?: Link
  // Optional tools, shown in grey under the text.
  tools?: string
  // Optional certificate file in /public/certificates, shown in a popup.
  certificate?: string
}

export type Certificate = {
  dates: string
  title: string
  issuer: string
  // Either a file in /public/certificates (PDF or image), shown in a popup,
  // or a url to the issuer's verification page, opened in a new tab.
  file?: string
  url?: string
}

export type Project = {
  meta: string
  title: string
  text: string
  // Optional details, hidden behind "Read more".
  points?: string[]
  tools: string
  link?: Link
  // Optional image in /public/projects, opened in a popup via a link on the project.
  screenshot?: string
  // true: shown as a small card under "More projects" instead of in the main list.
  more?: boolean
}

export type Content = {
  meta: { pageTitle: string; description: string }
  title: string
  tagline: string
  about: string[]
  location: string
  cv: string
  work: Entry[]
  education: Entry[]
  skills: { group: string; items: string | string[] }[]
  volunteering: Entry[]
  certificates: Certificate[]
  projects: Project[]
  ui: {
    nav: { about: string; resume: string; projects: string; contact: string }
    languageLabel: string
    hello: string
    photoPlaceholder: string
    portraitOf: string
    downloadCv: string
    groups: { work: string; education: string; skills: string; volunteering: string; certificates: string }
    certificate: { view: string; verify: string; close: string; openNewTab: string }
    viewScreenshot: string
    readMore: string
    readLess: string
    moreProjects: string
    contact: {
      intro: string
      name: string
      email: string
      message: string
      send: string
      sending: string
      sent: string
      error: string
    }
  }
}