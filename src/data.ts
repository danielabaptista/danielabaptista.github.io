// All site content can be found here

export const profile = {
  name: 'María Daniela Baptista Theuerkauf',
  nameLines: ['María Daniela', 'Baptista Theuerkauf'],
  shortName: 'María Theuerkauf--',
  title: 'Systems Engineer, M.Sc. IoT and Smart Systems',
  photo: '', // '/photo.jpg'
  tagline:
      'I build the software that gets IoT devices securely onto the cloud and makes their data understandable.',
  about: [
    'I’m finishing my M.Sc. in Internet of Things and Smart Systems at the Westsächsische Hochschule Zwickau and work in the Platform team at N+P Informationssysteme. For my master’s thesis I designed and built a vendor-independent onboarding system for IoT gateways, from certificate-based provisioning to a payload mapper that translates each vendor’s telemetry into one platform format.',
    'Before Germany, I studied systems engineering with a focus on control and automation at the Universidad de Los Andes in Venezuela. I’m looking for a full-time role from January 2027.',
  ],
  location: 'Zwickau, Germany',
  email: 'm.danielabap@gmail.com',
  linkedin: 'https://www.linkedin.com/in/baptista-daniela/',
  github: 'https://github.com/danielabaptista',
  cv: '/cv.pdf',
  formspreeId: 'mzboporp', // https://formspree.io/f/mzboporp
}

export type Entry = {
  dates: string
  title: string
  place?: string
  text?: string
}

export const work: Entry[] = [
  {
    dates: 'since 11/2025',
    title: 'Working student, IoT and software development',
    place: 'N+P Informationssysteme GmbH, Zwickau',
    text: 'Platform team. Developed and integrated IoT applications on a cloud-based IoT platform, then built my master’s thesis system there: gateway onboarding with X.509 certificates, automatic device registration and a configurable payload mapper with React admin UIs. Also integrating EnOcean sensors into the platform.',
  },
  {
    dates: '[Dates]',
    title: '[Earlier role]',
    place: '[Company, city]',
    text: '[One or two sentences on what you did there.]',
  },
]

export const education: Entry[] = [
  {
    dates: 'since 09/2024',
    title: 'M.Sc. Internet of Things and Smart Systems',
    place: 'Westsächsische Hochschule Zwickau',
    text: 'Thesis on secure plug-and-play onboarding for IoT gateways with adaptive payload mapping. Scholarship holder of the Louis Schuler Fonds.',
  },
  {
    dates: '04/2024 – 09/2024',
    title: 'M.Sc. Computer Science',
    place: 'Eberhard Karls Universität Tübingen',
  },
  {
    dates: '2012 – 2019',
    title: 'Systems Engineering, control and automation',
    place: 'Universidad de Los Andes, Mérida, Venezuela',
  },
]

export const skills: { group: string; items: string }[] = [
  { group: 'IoT and infrastructure', items: 'MQTT, Eclipse Hono, Kafka, Docker, X.509 and PKI with Step CA, EnOcean' },
  { group: 'Programming', items: 'TypeScript and JavaScript, Python, C and C++' },
  { group: 'Web and backend', items: 'Node.js, React, Carbon Design System, HTML and CSS' },
  { group: 'Data and tools', items: 'PostgreSQL, MySQL, InfluxDB, Grafana, Node-RED, Git' },
]

export const volunteering: Entry[] = [
  {
    dates: '11/2024 – 05/2025',
    title: 'City coordinator, Pint of Science Zwickau',
    text: 'Brought the science festival to Zwickau for the first time and built and led the volunteer team.',
  },
  {
    dates: 'since 03/2025',
    title: 'Language exchange group, WHZ',
    text: 'Organize twice-weekly Spanish, Portuguese and German exchange meetings.',
  },
]

export type Project = {
  meta: string
  title: string
  text: string
  tools: string
  visual: 'onboarding' | 'mapper' | { image: string; alt: string } | null
}

export const projects: Project[] = [
  {
    meta: 'Master’s thesis, 2026',
    title: 'Plug-and-play onboarding for IoT gateways',
    text: 'A gateway is plugged in and gets onto the cloud platform on its own. An agent on the gateway proves its identity from hardware attributes, a bootstrap server issues an X.509 certificate through Step CA and registers the device on the platform, and the gateway receives its credentials. Tested on real HUB-GM100 hardware.',
    tools: 'TypeScript, Node.js, MQTT, Eclipse Hono, Step CA, Docker, React',
    visual: 'onboarding',
  },
  {
    meta: 'Master’s thesis and N+P, 2026',
    title: 'Payload mapper',
    text: 'Every gateway vendor sends telemetry in its own shape. The mapper reads a device profile, translates raw payloads into the platform’s format and asks an operator to confirm unknown fields and units in a review UI. Now being extended with rule-based structure analysis and deployed at N+P.',
    tools: 'TypeScript, Kafka, Node-RED, React, Carbon Design System',
    visual: 'mapper',
  },
  {
    meta: '[Year]',
    title: '[Earlier project, e.g. bachelor’s thesis]',
    text: '[Two or three sentences: the problem, what you built, the result.]',
    tools: '[Tools used]',
    visual: null, // or { image: '/project.jpg', alt: 'What the image shows' }
  },
]