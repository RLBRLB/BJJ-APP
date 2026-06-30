import { Link, useParams, useNavigate } from 'react-router-dom'
import { TECHNIQUES, techniqueById } from '../data/curriculum'
import { beltById } from '../data/belts'
import { CATEGORY_META } from '../data/meta'
import { useProgress } from '../hooks/useProgress'

export default function TechniqueDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const t = id ? techniqueById(id) : undefined
  const { isLearned, isFavorite, toggleLearned, toggleFavorite } = useProgress()

  if (!t) {
    return (
      <div className="card grid place-items-center p-12 text-center">
        <p className="text-4xl">🥋</p>
        <p className="mt-2 text-slate-400">Technique introuvable.</p>
        <Link to="/curriculum" className="btn-primary mt-4">
          Retour au programme
        </Link>
      </div>
    )
  }

  const belt = beltById(t.belt)!
  const cat = CATEGORY_META[t.category]
  const learned = isLearned(t.id)
  const favorite = isFavorite(t.id)

  const idx = TECHNIQUES.findIndex((x) => x.id === t.id)
  const prev = TECHNIQUES[idx - 1]
  const nextT = TECHNIQUES[idx + 1]

  return (
    <div className="space-y-6">
      <button onClick={() => navigate(-1)} className="text-sm text-slate-400 hover:text-white">
        ← Retour
      </button>

      {/* Header */}
      <header className="card relative overflow-hidden p-6 md:p-8">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl" style={{ background: `${cat.color}22` }} />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip" style={{ background: `${cat.color}22`, color: cat.color }}>
              {cat.icon} {cat.label}
            </span>
            <span className="chip bg-ink-700 text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: belt.color }} /> {belt.label}
            </span>
            <span className="chip bg-ink-700 text-slate-300">📍 {t.position}</span>
          </div>
          <h1 className="display mt-4 text-4xl text-white md:text-5xl">{t.name}</h1>
          {t.aka && <p className="text-slate-500">aussi appelé · {t.aka}</p>}
          <p className="mt-3 max-w-2xl text-slate-300">{t.summary}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => toggleLearned(t.id)}
              className={learned ? 'btn bg-emerald-600 text-white hover:bg-emerald-500' : 'btn-primary'}
            >
              {learned ? '✓ Acquise' : 'Marquer comme acquise'}
            </button>
            <button
              onClick={() => toggleFavorite(t.id)}
              className="btn-ghost"
            >
              {favorite ? '⭐ Favori' : '☆ Ajouter aux favoris'}
            </button>
          </div>
        </div>
      </header>

      {/* Concept */}
      <Section title="Le concept" icon="🧭">
        <p className="text-slate-300">{t.concept}</p>
      </Section>

      {/* Steps */}
      <Section title="Étape par étape" icon="📋">
        <ol className="space-y-3">
          {t.steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/15 text-sm font-bold text-accent-soft">
                {i + 1}
              </span>
              <span className="pt-0.5 text-slate-300">{s}</span>
            </li>
          ))}
        </ol>
      </Section>

      <div className="grid gap-4 md:grid-cols-2">
        <Section title="Points clés" icon="🎯" tight>
          <ul className="space-y-2">
            {t.keyDetails.map((d, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300">
                <span className="text-emerald-400">✓</span>
                {d}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Erreurs courantes" icon="⚠️" tight>
          <ul className="space-y-2">
            {t.commonMistakes.map((d, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300">
                <span className="text-accent">✗</span>
                {d}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {t.drills && t.drills.length > 0 && (
        <Section title="Drills suggérés" icon="🔁" tight>
          <ul className="space-y-2">
            {t.drills.map((d, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300">
                <span>🔂</span>
                {d}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Prev / next */}
      <nav className="flex items-center justify-between gap-3 pt-2">
        {prev ? (
          <Link to={`/technique/${prev.id}`} className="btn-ghost flex-1 justify-start">
            ← {prev.name}
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {nextT ? (
          <Link to={`/technique/${nextT.id}`} className="btn-ghost flex-1 justify-end text-right">
            {nextT.name} →
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </nav>
    </div>
  )
}

function Section({
  title,
  icon,
  children,
  tight,
}: {
  title: string
  icon: string
  children: React.ReactNode
  tight?: boolean
}) {
  return (
    <section className={`card ${tight ? 'p-5' : 'p-6'}`}>
      <h2 className="display mb-3 flex items-center gap-2 text-xl text-white">
        <span>{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}
