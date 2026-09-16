import type { Profile, Recommendation } from '../types/portfolio'

export default function AboutSection({
  profile,
  recommendation,
}: {
  profile: Profile
  recommendation: Recommendation
}) {
  return (
    <section id="about" className="shell py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="heading">How I got here</h2>
          <div className="mt-6 grid gap-5">
            {profile.bio.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[38rem] leading-relaxed text-text/90">
                {p}
              </p>
            ))}
          </div>
        </div>

        <figure className="self-start border-l border-signal/60 pl-6">
          <blockquote className="text-lg leading-relaxed text-text/90">
            {recommendation.quote}
          </blockquote>
          <figcaption className="mt-4">
            <p className="text-sm">{recommendation.name}</p>
            <p className="spec mt-1">{recommendation.role}</p>
            {recommendation.url ? (
              <a
                href={recommendation.url}
                target="_blank"
                rel="noreferrer"
                className="spec mt-3 block text-muted/80 transition-colors hover:text-signal"
              >
                {recommendation.note}
              </a>
            ) : (
              <p className="spec mt-3 text-muted/80">{recommendation.note}</p>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
