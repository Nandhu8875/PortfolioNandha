import type { SkillGroup } from '../types/portfolio'

export default function SkillsSection({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="shell py-16 sm:py-24">
      <h2 className="heading">What I work with</h2>
      <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.name} className="bg-ink p-6">
            <h3 className="font-mono text-[11px] tracking-[0.06em] text-signal">{g.name}</h3>
            <ul className="mt-4 grid gap-2">
              {g.items.map((i) => (
                <li key={i} className="text-sm text-text/85">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
