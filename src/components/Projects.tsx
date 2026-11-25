import { useState } from 'react'
import type { Certificate, Project } from '../content/types'
import { useLanguage } from '../i18n'
import CertificateDialog from './CertificateDialog'

const linkStyle =
    'cursor-pointer border-0 bg-transparent p-0 text-[15px] font-semibold text-ink underline underline-offset-4 hover:text-accent'

// Details; text before the first colon is shown bold, as a small heading.
function Points({ points, id }: { points: string[]; id: string }) {
    return (
        <ul id={id} className="mt-4 mb-0 flex max-w-[680px] list-disc flex-col gap-3 pl-5 marker:text-accent">
            {points.map((point) => {
                const i = point.indexOf(': ')
                return (
                    <li key={point}>
                        {i > 0 ? (
                            <>
                                <strong className="font-semibold">{point.slice(0, i)}:</strong>
                                {point.slice(i + 1)}
                            </>
                        ) : (
                            point
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

type ItemProps = { project: Project; id: string; onViewScreenshot: () => void }

// "Read more", link and screenshot buttons under a project.
function Actions({ project, id, open, onToggle, onViewScreenshot }: ItemProps & { open: boolean; onToggle: () => void }) {
    const { t } = useLanguage()
    if (!project.points && !project.link && !project.screenshot) return null
    return (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {project.points && (
                <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle} className={linkStyle}>
                    {open ? t.ui.readLess : t.ui.readMore}
                </button>
            )}
            {project.link && (
                <a href={project.link.url} target="_blank" rel="noreferrer" className="text-[15px] font-semibold text-ink hover:text-accent">
                    {project.link.label} →
                </a>
            )}
            {project.screenshot && (
                <button type="button" onClick={onViewScreenshot} className={linkStyle}>
                    {t.ui.viewScreenshot}
                </button>
            )}
        </div>
    )
}

// Main list: a row with the context on the left, like the resume.
function ProjectRow(props: ItemProps) {
    const { project, id } = props
    const [open, setOpen] = useState(false)
    return (
        <article className="flex flex-wrap gap-x-8 gap-y-2 border-t border-line py-10 first:border-t-0 first:pt-0">
            <p className="m-0 mt-1 flex-[0_0_200px] text-[15px] text-muted">{project.meta}</p>
            <div className="min-w-0 flex-[1_1_480px]">
                <h3 className="m-0 max-w-[720px] font-display text-[21px] font-semibold leading-snug">{project.title}</h3>
                <p className="mt-3 mb-0 max-w-[680px]">{project.text}</p>
                {open && project.points && <Points points={project.points} id={id} />}
                <p className="mt-3 mb-0 text-[15px] text-muted">{project.tools}</p>
                <Actions {...props} open={open} onToggle={() => setOpen(!open)} />
            </div>
        </article>
    )
}

// "More projects": a compact card.
function ProjectCard(props: ItemProps) {
    const { project, id } = props
    const [open, setOpen] = useState(false)
    return (
        <article className="flex flex-col bg-ground p-6">
            <p className="mt-0 mb-2 text-[14px] text-muted">{project.meta}</p>
            <h4 className="mt-0 mb-2 font-display text-lg font-semibold leading-snug">{project.title}</h4>
            <p className="mt-0 mb-3 text-[15px]">{project.text}</p>
            {open && project.points && <Points points={project.points} id={id} />}
            <p className="mt-auto mb-0 pt-2 text-[14px] text-muted">{project.tools}</p>
            <Actions {...props} open={open} onToggle={() => setOpen(!open)} />
        </article>
    )
}

export default function Projects() {
    const { t } = useLanguage()
    const [preview, setPreview] = useState<Certificate | null>(null)
    const main = t.projects.filter((p) => !p.more)
    const more = t.projects.filter((p) => p.more)

    // The popup used for certificates also shows project screenshots.
    const openScreenshot = (p: Project) => setPreview({ dates: '', title: p.title, issuer: p.meta, file: p.screenshot })

    return (
        <section id="projects" className="bg-white py-24 md:py-30">
            <div className="mx-auto max-w-[1240px] px-6 md:px-10">
                <h2 className="mt-0 mb-16 font-display text-[clamp(44px,6vw,64px)] font-bold leading-none md:mb-22">
                    {t.ui.nav.projects}
                </h2>

                <div>
                    {main.map((p, i) => (
                        <ProjectRow key={p.title} project={p} id={`project-${i}`} onViewScreenshot={() => openScreenshot(p)} />
                    ))}
                </div>

                {more.length > 0 && (
                    <div className="mt-16 border-t border-line pt-12">
                        <h3 className="mt-0 mb-8 font-display text-[21px] font-semibold">{t.ui.moreProjects}</h3>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {more.map((p, i) => (
                                <ProjectCard key={p.title} project={p} id={`more-project-${i}`} onViewScreenshot={() => openScreenshot(p)} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <CertificateDialog certificate={preview} onClose={() => setPreview(null)} />
        </section>
    )
}