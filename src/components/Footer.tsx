import { useState } from 'react'
import type { Profile } from '../types/portfolio'

export default function Footer({ profile }: { profile: Profile }) {
  const [copied, setCopied] = useState(false)
  const s = profile.social

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(s.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer id="contact" className="rule">
      <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="heading">
            <span className="chrome">Hiring for firmware?</span>
          </h2>
          <p className="mt-4 max-w-[34rem] leading-relaxed text-text/90">{profile.availability}</p>
          <p className="spec mt-3">{profile.specialization}</p>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between gap-4 rule pt-4">
            <a href={`mailto:${s.email}`} className="text-text hover:text-signal">
              {s.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="font-mono text-[11px] tracking-[0.06em] text-muted hover:text-text"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="rule pt-4 text-text hover:text-signal">
            {s.phone}
          </a>
          <a href={s.linkedin} className="rule pt-4 text-text hover:text-signal">
            LinkedIn
          </a>
          <a href={s.github} className="rule pt-4 text-text hover:text-signal">
            GitHub
          </a>
          <a href={s.resume} className="rule pt-4 text-text hover:text-signal">
            Résumé (PDF)
          </a>
        </div>
      </div>

      <div className="rule">
        <div className="shell flex flex-col gap-2 py-5 sm:flex-row sm:justify-between">
          <p className="spec">
            {profile.name} — {profile.location}
          </p>
          <p className="spec">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
