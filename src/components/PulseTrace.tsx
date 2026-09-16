/**
 * Step/direction pulse train, drawn once on load.
 * It is the one piece of non-user-triggered motion on the page.
 */
export default function PulseTrace({ className = '' }: { className?: string }) {
  const high = 10
  const low = 34
  let d = `M 0 ${low}`
  let x = 0
  const widths = [26, 18, 26, 18, 40, 18, 26, 18, 26, 18, 60, 18, 26, 18, 26, 18, 26, 18, 40, 18]
  widths.forEach((w, i) => {
    d += ` H ${x + w} V ${i % 2 === 0 ? high : low}`
    x += w
  })
  d += ` H ${x + 40}`

  return (
    <svg
      viewBox={`0 0 ${x + 40} 44`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d={d}
        fill="none"
        stroke="#F5A524"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        className="pulse-trace"
      />
    </svg>
  )
}
