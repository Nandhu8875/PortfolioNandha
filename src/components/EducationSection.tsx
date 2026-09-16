import type { EducationItem } from '../types/portfolio'

export default function EducationSection({ education }: { education: EducationItem[] }) {
  return (
    <section id="education" className="shell py-16 sm:py-20">
      <h2 className="heading">Study and certification</h2>
      <ul className="mt-8">
        {education.map((e) => (
          <li
            key={e.title}
            className="rule flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-[11px] tracking-[0.06em] text-muted sm:w-28">
              {e.period}
            </span>
            <span className="flex-1 text-text">{e.title}</span>
            <span className="text-sm text-muted">{e.org}</span>
            {e.url ? (
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="spec sm:w-32 sm:text-right transition-colors hover:text-signal"
              >
                {e.note}
              </a>
            ) : (
              <span className="spec sm:w-32 sm:text-right">{e.note}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
