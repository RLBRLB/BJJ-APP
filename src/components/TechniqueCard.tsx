import { Link } from 'react-router-dom'
import type { Technique } from '../types'
import { CATEGORY_META } from '../data/meta'
import { BeltBadge } from './BeltBadge'

export function TechniqueCard({
  t,
  learned,
  favorite,
}: {
  t: Technique
  learned?: boolean
  favorite?: boolean
}) {
  const cat = CATEGORY_META[t.category]
  return (
    <Link
      to={`/technique/${t.id}`}
      className="card group relative flex flex-col gap-3 p-4 transition hover:border-accent/60 hover:bg-ink-700/50"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="chip" style={{ background: `${cat.color}22`, color: cat.color }}>
          {cat.icon} {cat.label}
        </span>
        <div className="flex items-center gap-1.5">
          {favorite && <span title="Favori">⭐</span>}
          {learned && <span title="Acquis" className="text-emerald-400">✓</span>}
          <BeltBadge belt={t.belt} />
        </div>
      </div>
      <div>
        <h3 className="display text-lg leading-tight text-white group-hover:text-accent-soft">{t.name}</h3>
        {t.aka && <p className="text-xs text-slate-500">{t.aka}</p>}
      </div>
      <p className="text-sm text-slate-400 line-clamp-2">{t.summary}</p>
      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="text-xs text-slate-500">{t.position}</span>
        <span className="text-xs font-semibold text-accent-soft opacity-0 transition group-hover:opacity-100">
          Voir →
        </span>
      </div>
    </Link>
  )
}
