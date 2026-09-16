import type { Profile } from '../types/portfolio'
import PulseTrace from './PulseTrace'

export default function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section id="top" className="relative pt-[60px]">
      <div className="shell grid gap-10 pb-14 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-14">
        <div>
          <p className="spec">{profile.role}</p>
          <h1
            className="chrome mt-3 font-display font-medium leading-[0.92]"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 7.5rem)' }}
          >
            {profile.name}
          </h1>

          <div className="mt-6 max-w-[34rem]">
            <p className="text-lg leading-snug text-text sm:text-2xl">{profile.tagline}</p>
            <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.05em] text-muted">
              {profile.specialization}
            </p>
          </div>

          <PulseTrace className="mt-8 h-11 w-full max-w-[34rem] opacity-90" />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-signal px-5 py-2.5 text-sm text-ink transition-colors hover:bg-[#ffb943]"
            >
              See the machines
            </a>
            <a
              href={profile.social.resume}
              className="rounded-full border border-line px-5 py-2.5 text-sm text-text transition-colors hover:border-muted"
            >
              Download résumé
            </a>
          </div>
        </div>

        <figure className="order-first lg:order-none">
          <div className="relative mx-auto max-w-[320px] overflow-hidden rounded-sm border border-line bg-panel lg:mx-0 lg:max-w-[360px]">
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover object-top grayscale-[0.25]"
              loading="eager"
            />
          </div>
          <figcaption className="spec mt-3 flex justify-between">
            <span>{profile.location}</span>
            <span className="text-signal">Available now</span>
          </figcaption>
        </figure>
      </div>

      <div className="rule">
        <dl className="shell grid grid-cols-2 gap-y-5 py-5 sm:grid-cols-4">
          {profile.specStrip.map((s) => (
            <div key={s.label}>
              <dt className="spec">{s.label}</dt>
              <dd className="mt-1 text-sm text-text">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
