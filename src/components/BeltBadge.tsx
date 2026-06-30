import { beltById } from '../data/belts'
import type { Belt } from '../types'

export function BeltBadge({ belt, size = 'sm' }: { belt: Belt; size?: 'sm' | 'md' }) {
  const info = beltById(belt)!
  const h = size === 'md' ? 'h-6' : 'h-4'
  const w = size === 'md' ? 'w-14' : 'w-10'
  return (
    <span className="inline-flex items-center gap-2" title={info.label}>
      <span className={`relative ${h} ${w} rounded-sm overflow-hidden ring-1 ring-black/40`} style={{ background: info.color }}>
        <span className="absolute right-1.5 top-0 bottom-0 w-2.5 bg-black/85" />
        <span className="absolute right-2 top-0 bottom-0 w-0.5" style={{ background: info.color }} />
      </span>
    </span>
  )
}
