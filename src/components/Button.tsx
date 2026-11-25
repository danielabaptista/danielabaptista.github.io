type Props = {
  href: string
  children: React.ReactNode
  variant?: 'filled' | 'outline'
  size?: 'normal' | 'small'
  download?: boolean
}

export default function Button({ href, children, variant = 'outline', size = 'normal', download }: Props) {
  const color =
    variant === 'filled'
      ? 'border-[1.5px] border-accent bg-accent text-white hover:opacity-90'
      : 'border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white'
  const dimensions = size === 'small' ? 'min-h-10 min-w-32 px-7 text-[15px]' : 'min-h-12 px-9'
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center justify-center rounded-full font-semibold no-underline transition-colors ${dimensions} ${color}`}
    >
      {children}
    </a>
  )
}
