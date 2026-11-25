type IconProps = { className?: string }

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const GitHubIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
)

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const MailIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const MapPinIcon = ({ className }: IconProps) => (
    <svg {...base} className={className}>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
    </svg>
)

export const ArrowRight = () => (
  <svg aria-hidden="true" width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
    <path d="M0 8h29M23 2l6 6-6 6" />
  </svg>
)

export const ArrowDown = () => (
  <svg aria-hidden="true" width="16" height="32" viewBox="0 0 16 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 0v29M2 23l6 6 6-6" />
  </svg>
)
