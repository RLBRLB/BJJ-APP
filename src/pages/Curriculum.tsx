import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { TECHNIQUES } from '../data/curriculum'
import { BELTS } from '../data/belts'
import { CATEGORY_META, CATEGORY_ORDER } from '../data/meta'
import { useProgress } from '../hooks/useProgress'
import { TechniqueCard } from '../components/TechniqueCard'
import type { Belt, Category } from '../types'

export default function Curriculum() {
  const [params, setParams] = useSearchParams()
  const { isLearned, isFavorite } = useProgress()

  const beltParam = (params.get('belt') as Belt | 'all') || 'all'
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [query, setQuery] = useState('')
  const [onlyTodo, setOnlyTodo] = useState(false)

  const setBelt = (b: Belt | 'all') => {
    const next = new URLSearchParams(params)
    b === 'all' ? next.delete('belt') : next.set('belt', b)
    setParams(next, { replace: true })
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TECHNIQUES.filter((t) => {
      if (beltParam !== 'all' && t.belt !== beltParam) return false
      if (category !== 'all' && t.category !== category) return false
      if (onlyTodo && isLearned(t.id)) return false
      if (q) {
        const hay = `${t.name} ${t.aka ?? ''} ${t.position} ${t.summary}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [beltParam, category, query, onlyTodo, isLearned])

  return (
    <div className="space-y-6">
      <header>
        <h1 className="display text-3xl text-white md:text-4xl">Programme</h1>
        <p className="text-sm text-slate-500">
          {TECHNIQUES.length} techniques organisées par ceinture et par position.
        </p>
      </header>

      {/* Search */}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une technique, une position…"
          className="w-full rounded-xl border border-ink-700 bg-ink-800 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none"
        />
      </div>

      {/* Belt tabs */}
      <div className="flex flex-wrap gap-2">
        <Tab active={beltParam === 'all'} onClick={() => setBelt('all')} label="Toutes" />
        {BELTS.map((b) => (
          <Tab
            key={b.id}
            active={beltParam === b.id}
            onClick={() => setBelt(b.id)}
            label={b.label.replace('Ceinture ', '')}
            dot={b.color}
          />
        ))}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        <Tab active={category === 'all'} onClick={() => setCategory('all')} label="Tout" small />
        {CATEGORY_ORDER.map((c) => (
          <Tab
            key={c}
            active={category === c}
            onClick={() => setCategory(c)}
            label={`${CATEGORY_META[c].icon} ${CATEGORY_META[c].label}`}
            small
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-400">
          <input
            type="checkbox"
            checked={onlyTodo}
            onChange={(e) => setOnlyTodo(e.target.checked)}
            className="h-4 w-4 accent-accent"
          />
          À apprendre uniquement
        </label>
        <span className="text-sm text-slate-500">{results.length} résultat(s)</span>
      </div>

      {/* Belt context banner */}
      {beltParam !== 'all' && (
        <BeltBanner belt={beltParam} />
      )}

      {/* Grid */}
      {results.length === 0 ? (
        <div className="card grid place-items-center p-12 text-center text-slate-500">
          <p className="text-4xl">🤔</p>
          <p className="mt-2">Aucune technique ne correspond à ces filtres.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t) => (
            <TechniqueCard key={t.id} t={t} learned={isLearned(t.id)} favorite={isFavorite(t.id)} />
          ))}
        </div>
      )}
    </div>
  )
}

function BeltBanner({ belt }: { belt: Belt }) {
  const info = BELTS.find((b) => b.id === belt)!
  return (
    <div className="card flex items-start gap-4 p-5">
      <div className="mt-1 h-12 w-2 shrink-0 rounded-full" style={{ background: info.color }} />
      <div>
        <p className="display text-xl text-white">
          {info.label} · <span className="text-accent-soft">{info.focus}</span>
        </p>
        <p className="mt-1 text-sm text-slate-400">{info.description}</p>
      </div>
    </div>
  )
}

function Tab({
  active,
  onClick,
  label,
  dot,
  small,
}: {
  active: boolean
  onClick: () => void
  label: string
  dot?: string
  small?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`chip border transition ${small ? '' : 'px-4 py-1.5'} ${
        active
          ? 'border-accent bg-accent/15 text-accent-soft'
          : 'border-ink-700 bg-ink-800 text-slate-400 hover:text-slate-200'
      }`}
    >
      {dot && <span className="h-2.5 w-2.5 rounded-full" style={{ background: dot }} />}
      {label}
    </button>
  )
}
