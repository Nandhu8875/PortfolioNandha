import type { Project } from '../types/portfolio'

function Gallery({ media, title }: { media: Project['media']; title: string }) {
  if (media.length === 0) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-sm border border-line bg-panel">
        <span className="spec px-6 text-center">{title} — no photos yet</span>
      </div>
    )
  }

  const [lead, ...rest] = media

  return (
    <div className="grid gap-2">
      <figure>
        <img
          src={lead.src}
          alt={lead.caption}
          loading="lazy"
          className="aspect-[16/10] w-full rounded-sm border border-line object-cover"
        />
        <figcaption className="spec mt-2">{lead.caption}</figcaption>
      </figure>
      {rest.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {rest.slice(0, 3).map((m) => (
            <figure key={m.src}>
              <img
                src={m.src}
                alt={m.caption}
                loading="lazy"
                className="aspect-square w-full rounded-sm border border-line object-cover"
              />
              <figcaption className="spec mt-1.5 hidden sm:block">{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <article className="rule grid gap-8 py-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="spec flex gap-4">
          <span className="text-signal">{String(index + 1).padStart(2, '0')}</span>
          <span>{project.context}</span>
          <span className="ml-auto">{project.year}</span>
        </p>
        <h3 className="heading mt-4">{project.title}</h3>
        <p className="mt-2 text-muted">{project.subtitle}</p>
        <p className="mt-5 max-w-[36rem] leading-relaxed text-text/90">{project.description}</p>

        <ul className="mt-6 grid gap-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-text/85">
              <span aria-hidden="true" className="mt-[7px] h-px w-4 shrink-0 bg-signal" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link}
            className="mt-6 inline-block border-b border-signal pb-0.5 text-sm text-signal"
          >
            View the code
          </a>
        )}
      </div>

      <Gallery media={project.media} title={project.title} />
    </article>
  )
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const ordered = [...projects].sort(
    (a, b) => Number(b.highlight) - Number(a.highlight),
  )

  return (
    <section id="work" className="shell py-16 sm:py-24">
      <h2 className="heading">Things I have built and debugged</h2>
      <p className="mt-3 max-w-[40rem] text-muted">
        Photos are from the actual bench — prototypes, screens and rigs, not renders.
      </p>
      <div className="mt-6">
        {ordered.map((p, i) => (
          <ProjectEntry key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
