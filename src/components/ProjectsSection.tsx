import { useRef } from 'react'
import type { Architecture, Project } from '../types/portfolio'

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

function ArchitecturePanel({ architecture }: { architecture: Architecture }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openRef = useRef<number>(0)
  const [front, back] = architecture.diagrams

  const show = (i: number) => {
    openRef.current = i
    const d = dialogRef.current
    if (!d) return
    const img = d.querySelector('img')
    const cap = d.querySelector('p')
    const g = architecture.diagrams[i]
    if (img) {
      img.src = g.src
      img.alt = g.alt
    }
    if (cap) cap.textContent = g.title + ' — ' + g.tag
    d.showModal()
  }

  return (
    <div>
      <p className="spec">System architecture</p>
      <p className="mt-3 max-w-[44rem] leading-relaxed text-text/90">{architecture.intro}</p>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
        {[front, back].map((g, i) => (
          <figure key={g.src}>
            <button
              type="button"
              onClick={() => show(i)}
              aria-label={`Enlarge ${g.title} diagram`}
              className="group block w-full cursor-zoom-in rounded-sm border border-line bg-[#F1EFE8] p-3 text-left transition-colors hover:border-signal"
            >
              <img
                src={g.src}
                alt={g.alt}
                width={g.width}
                height={g.height}
                loading="lazy"
                className="h-auto w-full"
              />
            </button>
            <figcaption className="mt-3">
              <span className="flex items-baseline gap-3">
                <span className="font-normal">{g.title}</span>
                <span className="spec">{g.tag}</span>
              </span>
              <span className="mt-1 block max-w-[34rem] text-sm leading-relaxed text-muted">
                {g.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto w-[min(92vw,64rem)] max-h-[92vh] overflow-auto rounded-sm border border-line bg-panel p-4 text-text backdrop:bg-black/80"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="spec" />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="border-b border-signal pb-0.5 text-sm text-signal"
          >
            Close
          </button>
        </div>
        <img src="" alt="" className="mx-auto mt-3 h-auto max-h-[78vh] w-auto max-w-full rounded-sm bg-[#F1EFE8] p-4" />
      </dialog>
    </div>
  )
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <>
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
    {project.architecture && (
      <div className="pb-12">
        <ArchitecturePanel architecture={project.architecture} />
      </div>
    )}
    </>
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
