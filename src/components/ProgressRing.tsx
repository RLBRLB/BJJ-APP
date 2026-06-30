export function ProgressRing({
  value,
  size = 64,
  stroke = 6,
  color = '#e0413b',
  label,
}: {
  value: number
  size?: number
  stroke?: number
  color?: string
  label?: string
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(1, value))
  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#2a3344" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      <span className="absolute text-center">
        <span className="block text-sm font-bold text-white">{Math.round(pct * 100)}%</span>
        {label && <span className="block text-[10px] text-slate-400">{label}</span>}
      </span>
    </div>
  )
}
