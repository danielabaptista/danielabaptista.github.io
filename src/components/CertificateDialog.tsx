import { useEffect, useRef } from 'react'
import type { Certificate } from '../content/types'
import { useLanguage } from '../i18n'

type Props = { certificate: Certificate | null; onClose: () => void }

// Shows a certificate (PDF or image) in a popup. Esc, the close button
// or a click on the dark backdrop closes it.
export default function CertificateDialog({ certificate, onClose }: Props) {
  const { t } = useLanguage()
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (certificate && !dialog.open) dialog.showModal()
    if (!certificate && dialog.open) dialog.close()
  }, [certificate])

  const isPdf = certificate?.file?.toLowerCase().endsWith('.pdf')

  return (
      <dialog
          ref={ref}
          onClose={onClose}
          onClick={(e) => {
            if (e.target === ref.current) onClose()
          }}
          aria-labelledby="certificate-title"
          className="m-auto w-[min(960px,calc(100vw-2rem))] max-w-none border-0 bg-white p-0 text-ink shadow-2xl backdrop:bg-black/60"
      >
        {certificate && (
            <div className="flex max-h-[calc(100vh-2rem)] flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4">
                <div>
                  <h2 id="certificate-title" className="m-0 font-display text-lg font-semibold">{certificate.title}</h2>
                  <p className="m-0 text-[15px] text-muted">{certificate.issuer}</p>
                </div>
                <div className="flex items-center gap-4 text-[15px]">
                  <a href={certificate.file} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                    {t.ui.certificate.openNewTab}
                  </a>
                  <button
                      type="button"
                      onClick={onClose}
                      className="min-h-10 cursor-pointer rounded-full border-[1.5px] border-ink bg-transparent px-5 font-semibold text-ink hover:bg-ink hover:text-white"
                  >
                    {t.ui.certificate.close}
                  </button>
                </div>
              </div>
              <div className="min-h-0 flex-1 overflow-auto bg-ground">
                {isPdf ? (
                    <iframe src={certificate.file} title={certificate.title} className="block h-[75vh] w-full border-0" />
                ) : (
                    <img src={certificate.file} alt={certificate.title} className="mx-auto block max-w-full" />
                )}
              </div>
            </div>
        )}
      </dialog>
  )
}