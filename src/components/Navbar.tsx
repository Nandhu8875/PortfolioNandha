import { useEffect, useState } from 'react'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ name }: { name: string }) {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid ? 'bg-ink/90 backdrop-blur border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex h-[60px] items-center justify-between">
        <a href="#top" className="font-mono text-xs tracking-[0.08em] text-muted hover:text-text">
          {name}
        </a>
        <ul className="hidden gap-7 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition-colors hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-mono text-[11px] tracking-[0.08em] text-signal sm:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
