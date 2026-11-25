import { shared } from '../content/shared'
import { useLanguage } from '../i18n'
import Button from './Button'
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from './Icons'
import Typewriter from './Typewriter'

export default function About() {
  const { t } = useLanguage()
  const socials = [
    { href: shared.github, label: 'GitHub', Icon: GitHubIcon },
    { href: shared.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: `mailto:${shared.email}`, label: 'Email', Icon: MailIcon },
  ].filter((s) => s.href)

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* Beige band on the left; the card overlaps its right edge */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-[39%] bg-sand md:block" />

      <div className="relative mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-9 gap-y-14 px-6 py-14 md:flex-nowrap md:py-24">
        {/* Profile card */}
        <div className="w-full max-w-[375px] shrink-0 bg-sand-light shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col items-center px-8 pt-11 text-center">
            {shared.photo ? (
              <img
                src={shared.photo}
                alt={`${t.ui.portraitOf} ${shared.name}`}
                className="size-[205px] rounded-full object-cover"
              />
            ) : (
                /*<div
                role="img"
                aria-label="Profile photo placeholder"
                className="flex size-[205px] items-center justify-center rounded-full bg-photo font-display text-[15px] text-[#4a443d]"
              >
                {t.ui.photoPlaceholder}
              </div>*/
              <div
                  aria-hidden="true"
                  className="flex size-[205px] items-center justify-center rounded-full bg-accent font-display text-[72px] font-bold tracking-tight text-white"
                  >
                {shared.initials}
              </div>
            )}
            <h1 className="mt-9 mb-0 font-display text-[28px] font-bold leading-[1.2]">
              {shared.nameLines[0]}
              <br />
              {shared.nameLines[1]}
            </h1>
            <div aria-hidden="true" className="my-6 h-0.5 w-12 bg-accent" />
            <p className="mt-0 mb-3 whitespace-pre-line text-[14px] tracking-[0.06em] text-[#3d3d3d] sm:tracking-[0.1em]">{t.title}</p>
            <p className="mt-0 mb-8 inline-flex items-center gap-1.5 text-[14px] text-muted">
              <MapPinIcon className="size-4 shrink-0" />
              {t.location}
            </p>
          </div>
          <div className="flex justify-center gap-4 bg-white py-1.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex size-11 items-center justify-center text-ink transition-colors hover:text-accent"
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div className="w-full max-w-[460px]">
          <p className="m-0 font-display text-[clamp(44px,5vw,60px)] font-bold leading-[0.95] tracking-tight">
            <Typewriter words={[t.ui.hello, t.ui.hello === 'Hallo' ? 'Hello' : 'Hallo', 'Hola']} />
          </p>
          {/*<p className="mt-6 mb-0 text-[20px] leading-snug">{t.tagline}</p>*/}
          <div className="mt-7 mb-10 flex flex-wrap gap-2">
            <Button href="#resume" variant="filled" size="small">{t.ui.nav.resume}</Button>
            <Button href="#projects" size="small">{t.ui.nav.projects}</Button>
          </div>
          <div className="flex flex-col gap-4 text-[15px] leading-[1.6]">
            {t.about.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="m-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
