import { useState } from 'react'
import { shared } from '../content/shared'
import { useLanguage } from '../i18n'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full border border-line bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-accent'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.ui.contact
  const [status, setStatus] = useState<Status>('idle')
  const year = new Date().getFullYear()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    try {
      const response = await fetch(`https://formspree.io/f/${shared.formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(String(response.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="pt-20 pb-10 md:pt-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="flex flex-wrap gap-x-16 gap-y-10 pb-16">
          {/* Left: heading and direct links */}
          <div className="flex-[1_1_300px]">
            <h2 className="mt-0 mb-4 font-display text-[clamp(36px,4vw,44px)] font-bold leading-none">{t.ui.nav.contact}</h2>
            <p className="mt-0 mb-8 max-w-[360px]">
              {c.intro}
            </p>
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-[15px]">
              <li><a href={`mailto:${shared.email}`} className="text-ink hover:text-accent">{shared.email}</a></li>
              {shared.linkedin && (
                <li><a href={shared.linkedin} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">LinkedIn</a></li>
              )}
              <li>
                <a href={shared.github} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                  {shared.github.replace('https://', '')}
                </a>
              </li>
              <li className="text-muted">{t.location}</li>
            </ul>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-[2_1_460px] flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-[15px] font-medium">
                {c.name}
                <input name="name" type="text" required autoComplete="name" className={field} />
              </label>
              <label className="flex flex-col gap-1.5 text-[15px] font-medium">
                {c.email}
                <input name="email" type="email" required autoComplete="email" className={field} />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-[15px] font-medium">
              {c.message}
              <textarea name="message" required rows={4} className={`${field} resize-y`} />
            </label>
            {/* Honeypot against spam bots: hidden from people, bots fill it in */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending' || !shared.formspreeId}
                className="inline-flex min-h-11 cursor-pointer items-center rounded-full border-[1.5px] border-accent bg-accent px-8 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'sending' ? c.sending : c.send}
              </button>
              <p role="status" className="m-0 text-[15px]">
                {status === 'sent' && c.sent}
                {status === 'error' && (
                  <span>
                    {c.error}{' '}
                    <a href={`mailto:${shared.email}`}>{shared.email}</a>.
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
        <p className="m-0 border-t border-line pt-5 text-sm text-muted">© {year} {shared.shortName}</p>
      </div>
    </section>
  )
}
