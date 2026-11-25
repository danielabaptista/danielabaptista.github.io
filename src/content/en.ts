import type { Content } from './types'

// English content.
export const en: Content = {
  meta: {
    pageTitle: 'María Theuerkauf',
    description: 'Portfolio von María Daniela Baptista, Systems Engineer, IoT and Smart Systems in Germany',
  },
  title: 'Systems Engineer,\nM.Sc. Student, Internet of Things and Smart Systems',
  tagline:
      'Engineering across systems, languages and cultures.',
  about: [
    'Nice to see you here! This website shows a bit more about me and my journey. I’m a systems engineer specialized in control and automation, graduated in Venezuela, and now finishing my master’s in Internet of Things and Smart Systems in Germany.',
    'Take a look at what I’ve done so far, from professional projects to social engagement. And if something catches your interest, I’d be happy to hear from you.',
  ],
  location: 'Germany',
  cv: '/CV_BaptistaTheuerkauf_en.pdf', // English CV in /public
  work: [
    {
      dates: 'since 11/2025',
      title: 'Working student, IoT and software development',
      place: 'N+P Informationssysteme GmbH, Zwickau',
      text: [
        'Platform team: developed and integrated IoT applications on the company’s cloud-based IoT platform, including the installation and integration of gateways and sensors.',
        'Master’s thesis: Design and Prototypical Implementation of a Secure Onboarding Mechanism with Adaptive Payload Mapping for IoT Gateways in a Cloud-Based IoT Platform.',
      ],
    },
    {
      dates: '09/2025 – 10/2025',
      title: 'Web developer',
      place: 'Ciencia Conecta VE, remote',
      text: 'Built and launched a Django platform that connects Venezuelan researchers and students worldwide, with secure registration, admin approval, an interactive map and statistics dashboards.',
      link: { label: 'cienciaconectave.org', url: 'https://cienciaconectave.org/' },
    },
    {
      dates: '12/2020 – 08/2021',
      title: 'E-commerce developer',
      place: 'Catabra (start-up), remote',
      text: 'Built a WordPress and WooCommerce shop for a start-up in Bogotá, Colombia, including a custom design, payment integration and the product catalog structure.',
    },
    {
      dates: '02/2018 – 11/2019',
      title: 'Student assistant, control and automation systems',
      place: 'Faculty of Engineering, Universidad de Los Andes, Mérida',
      text: 'Supported courses in control and automation, instrumentation, system identification and modeling of physical systems. Prepared course material and led practical exercises.',
    },
  ],
  education: [
    {
      dates: 'since 09/2024',
      title: 'M.Sc. Internet of Things and Smart Systems',
      place: 'Westsächsische Hochschule Zwickau (WHZ)',
      text: [
        'Thesis: design and prototype of secure IoT gateway onboarding with adaptive payload mapping.',
        'Scholarship holder of the Louis Schuler Fonds since 10/2025.',
      ],
    },
    {
      dates: '04/2024 – 09/2024',
      title: 'M.Sc. Computer Science',
      place: 'Eberhard Karls Universität Tübingen',
    },
    {
      dates: '04/2012 – 12/2019',
      title: 'Systems Engineering, control and automation',
      place: 'Universidad de Los Andes, Mérida, Venezuela',
      text: 'Bachelor’s thesis: design of a supervisory control for hybrid renewable energy systems.',
      tools: 'MATLAB, Simulink',
    },
  ],
  skills: [
    { group: 'Programming Languages', items: 'Python, TypeScript, JavaScript, C, C++, R, Java' },
    { group: 'Web and Backend Development', items: 'Node.js, React, Django, HTML, CSS, WordPress, WooCommerce' },
    { group: 'IoT and Infrastructure', items: 'MQTT, Eclipse Hono, Kafka, Docker' },
    { group: 'Databases', items: 'MySQL, PostgreSQL, InfluxDB' },
    { group: 'Software and Tools', items: 'Git, GitHub, GitLab, Node-RED, Grafana, Jira, Confluence, MATLAB, Simulink, Android Studio, Qt, Bruno' },
    { group: 'UX/UI Design', items: 'Figma, Carbon Design System, Balsamiq' },
    { group: 'Languages', items: ['Spanish (Native)', 'English (Fluent)', 'German (B2)'] },
  ],
  volunteering: [
    {
      dates: '11/2024 – 05/2025',
      title: 'City coordinator, Pint of Science Zwickau 2025',
      text: 'Brought the international science festival to Zwickau for the first time in May 2025, from building the organizing team to finding venues and speakers, to bring science to the local community. Led the volunteer team and ran the monthly planning meetings.',
    },
    {
      dates: 'since 03/2025',
      title: 'Language exchange group, WHZ',
      text: 'Organize a language exchange where native German speakers learning Spanish or Portuguese practice with native Spanish and Portuguese speakers learning German, and the other way around. Meetings twice a month.',
    },
    {
      dates: '11/2024 – 02/2025',
      title: 'Student assistant, Compensation Programming',
      place: 'Westsächsische Hochschule Zwickau (WHZ)',
      text: 'Supported a course that teaches programming fundamentals in Python to prepare students for advanced modules.',
      certificate: '/certificates/compensation-programming.pdf',
    },
  ],
  certificates: [
    {
      dates: '07/2023 – 01/2024',
      title: 'Google Data Analytics Specialization',
      issuer: 'Google, Coursera',
      url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/BDM5VPWV5CEA',
    },
    {
      dates: '08/2023',
      title: 'Data Analytics and Visualization Job Simulation',
      issuer: 'Accenture North America, Forage',
      file: '/certificates/accenture-data-analytics.pdf',
    },
  ],
  projects: [
    {
      meta: 'Master’s thesis at N+P Informationssysteme, 2026',
      title: 'Design and Prototypical Implementation of a Secure Onboarding Mechanism with Adaptive Payload Mapping for IoT Gateways in a Cloud-Based IoT Platform',
      text: 'A system that brings IoT gateways from any vendor securely onto a cloud-based IoT platform and makes their data usable there, in two parts: onboarding and provisioning, and payload mapping.',
      points: [
        'Onboarding and provisioning: the bootstrap server recognizes a gateway’s very first connection, and an operator confirms whether the device is expected. A fingerprint calculated from the device’s information identifies it and is checked again at every step. The gateway then generates a CSR, which the bootstrap server passes to the certificate authority. In the end, the gateway has an X.509 certificate for platforms that authenticate with certificates, and a password for those that only use passwords.',
        'Payload mapping: a schema-based rule book translates each raw payload into the format the platform expects. The mapper suggests the mappings, and an operator confirms them in a review UI.',
      ],
      tools: 'TypeScript, Node.js, MQTT, Eclipse Hono, Step CA, Kafka, Docker, React, Carbon Design System',
    },
    {
      meta: 'Ciencia Conecta VE, 2025',
      title: 'Venezuelan researchers platform',
      text: 'A Django platform that connects Venezuelan researchers and students, with admin-approved registration, an interactive map and statistics on degrees and universities.',
      tools: 'Django, MySQL, Bootstrap',
      link: { label: 'Visit site', url: 'https://cienciaconectave.org/' },
    },
    {
      meta: 'WHZ, 2025',
      title: 'Robert Schumann walking app',
      text: 'An Android walking tour through Zwickau with map navigation and rewards for exploring each stop, designed from Balsamiq wireframes to the final UI.',
      tools: 'Android Studio, Balsamiq',
      link: { label: 'View code', url: 'https://github.com/danielabaptista/city_walk_app' },
    },
    {
      meta: 'WHZ, 2025',
      title: 'Weather dashboard',
      text: 'Real-time weather data from five German cities, collected with Node-RED, stored in InfluxDB and visualized in a Grafana dashboard.',
      tools: 'Node-RED, InfluxDB, Grafana',
      screenshot: '/projects/weather-dashboard.png',
      more: true,
    },
    {
      meta: ' WHZ, 2026 – team project',
      title: 'Smart door lock with face recognition',
      text: 'An IoT access control system: a knock or clap at the door triggers face recognition on a Raspberry Pi 5, which then sends the unlock command to an Arduino at the door.',
      points: [
        'Architecture: an Arduino UNO R4 WiFi at the door and a Raspberry Pi 5 as the central server communicate over MQTT (Mosquitto).',
        'Security: face recognition with DeepFace and a liveness check against spoofing with photos.',
        'Dashboard: a Flask web app with a live camera feed, lock status, manual unlock and an access log in SQLite.',
      ],
      tools: 'Raspberry Pi, Arduino, Python, MQTT, DeepFace, OpenCV, Flask, SQLite',
      link: { label: 'View code', url: 'https://github.com/SyedSiddiqShakir/smart-door-lock' },
      more: true,
    },
    {
      meta: 'WHZ, 2026 - team project',
      title: 'Autonomous driving: control design and simulation',
      text: 'Calculation and simulation of an automobile’s autonomous driving behavior, path following and speed control, in MATLAB and Simulink.',
      tools: 'MATLAB, Simulink',
      more: true,
    },
  ],
  ui: {
    nav: { about: 'About me', resume: 'Resume', projects: 'Projects', contact: 'Contact' },
    languageLabel: 'Language',
    hello: 'Hello',
    photoPlaceholder: '[Photo]',
    portraitOf: 'Portrait of',
    downloadCv: 'Download CV (PDF)',
    groups: {
      work: 'Work experience',
      education: 'Education',
      skills: 'Skills',
      volunteering: 'Volunteering',
      certificates: 'Certificates',
    },
    certificate: { view: 'View certificate', verify: 'Verify with issuer', close: 'Close', openNewTab: 'Open in new tab' },
    viewScreenshot: 'View screenshot',
    readMore: 'Read more',
    readLess: 'Show less',
    moreProjects: 'More projects',
    contact: {
      intro: 'Have a question, an opportunity or an idea? Send me a message and I’ll get back to you soon.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Message sent. I’ll get back to you soon.',
      error: 'Message not sent. Try again, or email me at',
    },
  },
}