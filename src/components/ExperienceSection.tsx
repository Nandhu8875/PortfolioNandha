import type { Role } from '../types/portfolio'

export default function ExperienceSection({ experience }: { experience: Role[] }) {
  return (
    <section id="experience" className="shell py-16 sm:py-24">
      <h2 className="heading">Where I have worked</h2>
      <ol className="mt-8">
        {experience.map((r) => (
          <li key={r.company} className="rule grid gap-6 py-10 lg:grid-cols-[14rem_1fr] lg:gap-12">
            <div>
              <p className="font-mono text-[11px] tracking-[0.06em] text-signal">{r.period}</p>
              <h3 className="mt-2 text-xl">{r.company}</h3>
              <p className="mt-1 text-sm text-muted">{r.role}</p>
              <p className="spec mt-2">{r.location}</p>
            </div>
            <div>
              <p className="max-w-[42rem] leading-relaxed text-text/90">{r.summary}</p>
              <ul className="mt-5 grid gap-3">
                {r.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-text/85">
                    <span aria-hidden="true" className="mt-[7px] h-px w-4 shrink-0 bg-line" />
                    <span className="max-w-[42rem]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
