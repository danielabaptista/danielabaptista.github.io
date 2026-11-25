import { useState } from 'react'
import type { Certificate, Entry } from '../content/types'
import { useLanguage } from '../i18n'
import Button from './Button'
import CertificateDialog from './CertificateDialog'

function Group({ title, children, first }: { title: string; children: React.ReactNode; first?: boolean }) {
    return (
        <div className={`flex flex-wrap gap-x-16 gap-y-6 py-16 md:py-20 ${first ? 'pt-0 md:pt-0' : 'border-t border-line'}`}>
            <h3 className="m-0 max-w-[260px] flex-[1_1_260px] font-display text-3xl font-semibold leading-tight">{title}</h3>
            <div className="flex min-w-0 flex-[2_1_560px] flex-col gap-14">{children}</div>
        </div>
    )
}

function Row({ dates, children }: { dates: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-1">
            <p className="m-0 mt-1 flex-[0_0_150px] whitespace-nowrap text-[15px] text-muted">{dates}</p>
            <div className="min-w-0 flex-[1_1_360px]">{children}</div>
        </div>
    )
}

function EntryRow({ entry, onViewCertificate }: { entry: Entry; onViewCertificate: (c: Certificate) => void }) {
    const { t } = useLanguage()
    return (
        <Row dates={entry.dates}>
            <h4 className="m-0 font-display text-[21px] font-semibold">{entry.title}</h4>
            {entry.place && <p className="mt-0.5 mb-0 text-muted">{entry.place}</p>}
            {typeof entry.text === 'string' && <p className="mt-3 mb-0 max-w-[560px]">{entry.text}</p>}
            {Array.isArray(entry.text) && (
                <ul className="mt-3 mb-0 flex max-w-[560px] list-disc flex-col gap-2 pl-5 marker:text-accent">
                    {entry.text.map((item) => <li key={item}>{item}</li>)}
                </ul>
            )}
            {entry.tools && <p className="mt-2 mb-0 text-[15px] text-muted">{entry.tools}</p>}
            {entry.link && (
                <p className="mt-3 mb-0">
                    <a href={entry.link.url} target="_blank" rel="noreferrer" className="font-semibold text-ink hover:text-accent">
                        {entry.link.label} →
                    </a>
                </p>
            )}
            {entry.certificate && (
                <button
                    type="button"
                    onClick={() =>
                        onViewCertificate({ dates: entry.dates, title: entry.title, issuer: entry.place ?? '', file: entry.certificate })
                    }
                    className="mt-3 cursor-pointer border-0 bg-transparent p-0 text-base font-semibold text-ink underline underline-offset-4 hover:text-accent"
                >
                    {t.ui.certificate.view}
                </button>
            )}
        </Row>
    )
}

export default function Resume() {
    const { t } = useLanguage()
    const [openCertificate, setOpenCertificate] = useState<Certificate | null>(null)

    return (
        <section id="resume" className="py-24 md:py-30">
            <div className="mx-auto max-w-[1240px] px-6 md:px-10">
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-22">
                    <h2 className="m-0 font-display text-[clamp(44px,6vw,64px)] font-bold leading-none">{t.ui.nav.resume}</h2>
                    <Button href={t.cv} download>{t.ui.downloadCv}</Button>
                </div>

                <Group first title={t.ui.groups.work}>
                    {t.work.map((e) => <EntryRow key={e.title} entry={e} onViewCertificate={setOpenCertificate} />)}
                </Group>

                <Group title={t.ui.groups.education}>
                    {t.education.map((e) => <EntryRow key={e.title} entry={e} onViewCertificate={setOpenCertificate} />)}
                </Group>

                <Group title={t.ui.groups.skills}>
                    <dl className="m-0 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
                        {t.skills.map((s) => (
                            <div key={s.group}>
                                <dt className="font-display text-lg font-semibold">{s.group}</dt>
                                <dd className="mt-1.5 ml-0">
                                    {Array.isArray(s.items) ? (
                                        <ul className="m-0 flex list-disc flex-col gap-1 pl-5 marker:text-accent">
                                            {s.items.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    ) : (
                                        s.items
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </Group>

                <Group title={t.ui.groups.certificates}>
                    {t.certificates.map((c) => (
                        <Row key={c.title} dates={c.dates}>
                            <h4 className="m-0 font-display text-[21px] font-semibold">{c.title}</h4>
                            <p className="mt-0.5 mb-0 text-muted">{c.issuer}</p>
                            {c.url ? (
                                <p className="mt-3 mb-0">
                                    <a href={c.url} target="_blank" rel="noreferrer" className="font-semibold text-ink underline underline-offset-4 hover:text-accent">
                                        {t.ui.certificate.verify} →
                                    </a>
                                </p>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setOpenCertificate(c)}
                                    className="mt-3 cursor-pointer border-0 bg-transparent p-0 text-base font-semibold text-ink underline underline-offset-4 hover:text-accent"
                                >
                                    {t.ui.certificate.view}
                                </button>
                            )}
                        </Row>
                    ))}
                </Group>

                <Group title={t.ui.groups.volunteering}>
                    {t.volunteering.map((e) => <EntryRow key={e.title} entry={e} onViewCertificate={setOpenCertificate} />)}
                </Group>
            </div>
            <CertificateDialog certificate={openCertificate} onClose={() => setOpenCertificate(null)} />
        </section>
    )
}