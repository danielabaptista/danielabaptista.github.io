import type { Content } from './types'

// Deutsche Inhalte.
export const de: Content = {
  meta: {
    pageTitle: 'María Theuerkauf',
    description: 'Portfolio von María Daniela Baptista, IoT-Softwareentwicklerin in Zwickau.',
  },
  title: 'Systems Engineer,\nM.Sc. Student, Internet of Things and Smart Systems',
  tagline:
      'Ich entwickle Software, die IoT-Geräte sicher in die Cloud bringt und ihre Daten verständlich macht.',
  about: [
    'Schön, dass Sie hier sind! Auf dieser Website erfahren Sie mehr über mich und meinen Weg. Ich habe in Venezuela meinen Abschluss als Systemingenieurin mit Schwerpunkt Regelungs- und Automatisierungstechnik gemacht und schließe jetzt meinen Master in Internet of Things and Smart Systems in Deutschland ab.',
    'Schauen Sie sich an, was ich bisher gemacht habe, von beruflichen Projekten bis zu ehrenamtlichem Engagement. Und wenn Sie etwas interessiert, freue ich mich auf Ihre Nachricht.',
  ],
  location: 'Deutschland',
  cv: '/CV_BaptistaTheuerkauf_de.pdf', // deutschen Lebenslauf in /public
  work: [
    {
      dates: 'seit 11/2025',
      title: 'Werkstudentin IoT / Softwareentwicklung',
      place: 'N+P Informationssysteme GmbH, Zwickau',
      text: [
        'Platform-Team: Entwicklung und Integration von IoT-Anwendungen auf der cloudbasierten IoT-Plattform des Unternehmens, einschließlich Installation und Integration von Gateways und Sensoren.',
        'Masterarbeit: Konzeption und prototypische Implementierung eines sicheren IoT-Gateway-Onboardings mit adaptiver Payload-Zuordnung.',
      ],
    },
    {
      dates: '09/2025 – 10/2025',
      title: 'Webentwicklerin',
      place: 'Ciencia Conecta VE, remote',
      text: 'Entwicklung und Veröffentlichung einer Django-Plattform, die venezolanische Forschende und Studierende weltweit vernetzt – mit sicherer Registrierung, Admin-Freigabe, interaktiver Karte und Statistik-Dashboards.',
      link: { label: 'cienciaconectave.org', url: 'https://cienciaconectave.org/' },
    },
    {
      dates: '12/2020 – 08/2021',
      title: 'E-Commerce-Entwicklerin',
      place: 'Catabra (Start-up), remote',
      text: 'Aufbau eines WordPress- und WooCommerce-Shops für ein Start-up in Bogotá (Kolumbien), inklusive individuellem Design, Integration des Zahlungsdienstes und Struktur des Produktkatalogs.',
    },
    {
      dates: '02/2018 – 11/2019',
      title: 'Studentische Hilfskraft, Regelungs- und Automatisierungstechnik',
      place: 'Fakultät für Ingenieurwesen, Universidad de Los Andes, Mérida',
      text: 'Unterstützung von Lehrveranstaltungen zu Regelungs- und Automatisierungstechnik, Instrumentierung, Systemidentifikation und Modellierung physikalischer Systeme. Vorbereitung von Kursmaterialien und Leitung praktischer Übungen.',
    },
  ],
  education: [
    {
      dates: 'seit 09/2024',
      title: 'M.Sc. Internet of Things and Smart Systems',
      place: 'Westsächsische Hochschule Zwickau (WHZ)',
      text: [
        'Masterarbeit: Konzeption und prototypische Implementierung eines sicheren IoT-Gateway-Onboardings mit adaptiver Payload-Zuordnung.',
        'Stipendiatin des Louis Schuler Fonds seit 10/2025.',
      ],
    },
    {
      dates: '04/2024 – 09/2024',
      title: 'M.Sc. Informatik',
      place: 'Eberhard Karls Universität Tübingen',
    },
    {
      dates: '04/2012 – 12/2019',
      title: 'Systemingenieurwesen, Schwerpunkt Regelungs- und Automatisierungstechnik',
      place: 'Universidad de Los Andes, Mérida, Venezuela',
      text: 'Bachelorarbeit: Entwurf einer Überwachungsregelung für hybride erneuerbare Energiesysteme.',
      tools: 'MATLAB, Simulink',
    },

  ],
  skills: [
    { group: 'Programmiersprachen', items: 'Python, TypeScript, JavaScript, C, C++, R, Java' },
    { group: 'Web- und Backend-Entwicklung', items: 'Node.js, React, Django, HTML, CSS, WordPress, WooCommerce' },
    { group: 'IoT und Infrastruktur', items: 'MQTT, Eclipse Hono, Kafka, Docker, X.509, PKI, Step CA, EnOcean' },
    { group: 'Datenbanken', items: 'MySQL, PostgreSQL, InfluxDB' },
    { group: 'Software und Tools', items: 'Git, GitHub, GitLab, Node-RED, Grafana, Jira, Confluence, MATLAB, Simulink, Android Studio, Qt, Bruno' },
    { group: 'UX/UI-Design', items: 'Figma, Carbon Design System, Balsamiq' },
    { group: 'Sprachen', items: ['Spanisch (Muttersprache)', 'Englisch (fließend)', 'Deutsch (B2)'] },
  ],
  volunteering: [
    {
      dates: '11/2024 – 05/2025',
      title: 'Stadtkoordinatorin, Pint of Science Zwickau 2025',
      text: 'Das internationale Wissenschaftsfestival im Mai 2025 erstmals nach Zwickau geholt – vom Aufbau des Organisationsteams bis zur Suche nach Veranstaltungsorten und Vortragenden –, um Wissenschaft in die Stadtgesellschaft zu bringen. Leitung des ehrenamtlichen Teams und der monatlichen Planungstreffen.',
    },
    {
      dates: 'seit 03/2025',
      title: 'Sprachaustauschgruppe, WHZ',
      text: 'Organisation eines Sprachaustauschs, bei dem deutsche Muttersprachler, die Spanisch oder Portugiesisch lernen, mit spanisch- und portugiesischsprachigen Deutschlernenden üben – und umgekehrt. Treffen zweimal im Monat.',
    },
    {
      dates: '11/2024 – 02/2025',
      title: 'Studentische Hilfskraft, Compensation Programming',
      place: 'Westsächsische Hochschule Zwickau (WHZ)',
      text: 'Unterstützung einer Lehrveranstaltung, die Programmiergrundlagen in Python vermittelt und Studierende auf fortgeschrittene Module vorbereitet.',
      certificate: '/certificates/compensation-programming.pdf',
    },
  ],
  certificates: [
    {
      dates: '07/2023 – 01/2024',
      title: 'Google Data Analytics Spezialisierung',
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
      meta: 'Masterarbeit bei der N+P Informationssysteme GmbH, 2026',
      title: 'Konzeption und prototypische Implementierung eines sicheren IoT-Gateway-Onboardings mit adaptiver Payload-Zuordnung',
      text: 'Ein System, das IoT-Gateways beliebiger Hersteller sicher auf eine cloudbasierte IoT-Plattform bringt und ihre Daten dort nutzbar macht – in zwei Teilen: Onboarding und Provisionierung sowie Payload-Mapping.',
      points: [
        'Onboarding und Provisionierung: Der Bootstrap-Server erkennt die allererste Verbindung eines Gateways, und ein Operator bestätigt, ob das Gerät erwartet wird. Ein aus den Geräteinformationen berechneter Fingerprint identifiziert das Gateway und wird in jedem Schritt erneut geprüft. Anschließend erzeugt das Gateway einen CSR, den der Bootstrap-Server an die Zertifizierungsstelle weiterleitet. Am Ende erhält das Gateway ein X.509-Zertifikat für Plattformen mit zertifikatsbasierter Authentifizierung sowie ein Passwort für Plattformen, die nur Passwörter verwenden.',
        'Payload-Mapping: Ein schemabasiertes Regelwerk übersetzt jede Rohnachricht in das Format, das die Plattform erwartet. Der Mapper schlägt die Zuordnungen vor, und ein Operator bestätigt sie in einer Review-Oberfläche.',
      ],
      tools: 'TypeScript, Node.js, MQTT, Eclipse Hono, Step CA, Kafka, Docker, React, Carbon Design System',
    },
    {
      meta: 'Ciencia Conecta VE, 2025',
      title: 'Plattform für venezolanische Forschende',
      text: 'Eine Django-Plattform, die venezolanische Forschende und Studierende vernetzt – mit Registrierung und Admin-Freigabe, interaktiver Karte und Statistiken zu Studiengängen und Universitäten.',
      tools: 'Django, MySQL, Bootstrap',
      link: { label: 'Zur Website', url: 'https://cienciaconectave.org/' },
    },
    {
      meta: 'WHZ, 2025',
      title: 'Robert Schumann Walking App',
      text: 'Eine Android-App für einen Stadtrundgang durch Zwickau mit kartenbasierter Navigation und Belohnungen für jede erkundete Station – gestaltet von Balsamiq-Wireframes bis zur finalen Oberfläche.',
      tools: 'Android Studio, Balsamiq',
      link: { label: 'Code ansehen', url: 'https://github.com/danielabaptista/city_walk_app' },
    },
    {
      meta: 'WHZ, 2025',
      title: 'Wetter-Dashboard',
      text: 'Echtzeit-Wetterdaten aus fünf deutschen Städten, erfasst mit Node-RED, gespeichert in InfluxDB und in einem Grafana-Dashboard visualisiert.',
      tools: 'Node-RED, InfluxDB, Grafana',
      screenshot: '/projects/weather-dashboard.png',
      more: true,
    },
    {
      meta: 'WHZ, 2026 – Teamprojekt',
      title: 'Smartes Türschloss mit Gesichtserkennung',
      text: 'Ein IoT-Zugangssystem: Ein Klopfen oder Klatschen an der Tür startet die Gesichtserkennung auf einem Raspberry Pi 5, der anschließend den Entriegelungsbefehl an einen Arduino an der Tür sendet.',
      points: [
        'Architektur: Ein Arduino UNO R4 WiFi an der Tür und ein Raspberry Pi 5 als zentraler Server kommunizieren über MQTT (Mosquitto).',
        'Sicherheit: Gesichtserkennung mit DeepFace und Lebenderkennung gegen Täuschung mit Fotos.',
        'Dashboard: Eine Flask-Web-App mit Live-Kamerabild, Schlossstatus, manueller Entriegelung und einem Zugriffsprotokoll in SQLite.',
      ],
      tools: 'Raspberry Pi, Arduino, Python, MQTT, DeepFace, OpenCV, Flask, SQLite',
      link: { label: 'Code ansehen', url: 'https://github.com/SyedSiddiqShakir/smart-door-lock' },
      more: true,
    },
    {
      meta: 'WHZ, 2026 – Teamprojekt',
      title: 'Autonomes Fahren: Reglerentwurf und Simulation',
      text: 'Berechnung und Simulation des autonomen Fahrverhaltens eines Automobils, einschließlich Spurführung und Geschwindigkeitsregelung, in MATLAB und Simulink.',
      tools: 'MATLAB, Simulink',
      more: true,
    },
  ],
  ui: {
    nav: { about: 'Über mich', resume: 'Lebenslauf', projects: 'Projekte', contact: 'Kontakt' },
    languageLabel: 'Sprache',
    hello: 'Hallo',
    photoPlaceholder: '[Foto]',
    portraitOf: 'Porträt von',
    downloadCv: 'Lebenslauf herunterladen (PDF)',
    groups: {
      work: 'Berufserfahrung',
      education: 'Bildungsweg',
      skills: 'Kenntnisse',
      volunteering: 'Ehrenamt',
      certificates: 'Zertifikate',
    },
    certificate: { view: 'Zertifikat ansehen', verify: 'Beim Aussteller prüfen', close: 'Schließen', openNewTab: 'In neuem Tab öffnen' },
    viewScreenshot: 'Screenshot ansehen',
    readMore: 'Mehr lesen',
    readLess: 'Weniger anzeigen',
    moreProjects: 'Weitere Projekte',
    contact: {
      intro:
          'Sie haben eine Frage, ein Angebot oder eine Idee? Schreiben Sie mir, ich melde mich zeitnah.',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet …',
      sent: 'Nachricht gesendet. Ich melde mich bald bei Ihnen.',
      error: 'Nachricht nicht gesendet. Versuchen Sie es erneut oder schreiben Sie mir an',
    },
  },
}