import { Link } from 'react-router-dom'
import { TECHNIQUES } from '../data/curriculum'
import { BELTS } from '../data/belts'
import { CONCEPTS } from '../data/concepts'
import { CATEGORY_META, CATEGORY_ORDER } from '../data/meta'
import { useProgress } from '../hooks/useProgress'
import { ProgressRing } from '../components/ProgressRing'
import { TechniqueCard } from '../components/TechniqueCard'

const LADDER = [
  { cat: 'survival', text: "Ne pas se faire soumettre" },
  { cat: 'escapes', text: 'Sortir des mauvaises positions' },
  { cat: 'guard', text: 'Attaquer depuis le dessous' },
  { cat: 'passing', text: 'Franchir la garde' },
  { cat: 'control', text: 'Dominer et immobiliser' },
  { cat: 'submissions', text: 'Finir le combat' },
] as const

export default function Home() {
  const { state, isLearned, isFavorite } = useProgress()
  const total = TECHNIQUES.length
  const done = state.learned.length
  const pct = done / total

  const next = TECHNIQUES.find((t) => !isLearned(t.id))

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="card relative overflow-hidden p-6 md:p-9">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <span className="chip bg-accent/15 text-accent-soft">Méthode progressive</span>
          <h1 className="display mt-3 text-4xl leading-none text-white md:text-6xl">
            Maîtrise le Jiu-Jitsu,<br />
            <span className="text-accent-soft">une position à la fois.</span>
          </h1>
          <p className="mt-4 max-w-xl text-slate-400">
            Un programme structuré par ceintures, qui suit une logique simple et éprouvée : d'abord
            survivre, ensuite sortir, puis attaquer. Apprends, coche, révise, progresse.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {next ? (
              <Link to={`/technique/${next.id}`} className="btn-primary">
                ▶ Continuer : {next.name}
              </Link>
            ) : (
              <Link to="/curriculum" className="btn-primary">
                ✓ Programme terminé — réviser
              </Link>
            )}
            <Link to="/curriculum" className="btn-ghost">
              Voir le programme
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="card flex items-center gap-4 p-5">
          <ProgressRing value={pct} label="acquis" />
          <div>
            <p className="text-2xl font-bold text-white">
              {done}/{total}
            </p>
            <p className="text-xs text-slate-500">techniques apprises</p>
          </div>
        </div>
        <Stat value={CATEGORY_ORDER.length} label="catégories" icon="🧩" />
        <Stat value={BELTS.length} label="niveaux de ceinture" icon="🥋" />
        <Stat value={state.favorites.length} label="favoris" icon="⭐" />
      </section>

      {/* Philosophy ladder */}
      <section>
        <SectionTitle title="La hiérarchie des positions" subtitle="Le principe qui structure tout le programme" />
        <div className="card p-5 md:p-6">
          <p className="mb-5 text-sm text-slate-400">
            Chaque marche se construit sur la précédente. On ne cherche pas à finir avant d'avoir
            appris à survivre.
          </p>
          <ol className="space-y-2.5">
            {LADDER.map((step, i) => {
              const meta = CATEGORY_META[step.cat]
              return (
                <li key={step.cat} className="flex items-center gap-3">
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold"
                    style={{ background: `${meta.color}22`, color: meta.color }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-xl bg-ink-700/40 px-4 py-2.5">
                    <span className="font-semibold text-white">
                      {meta.icon} {meta.label}
                    </span>
                    <span className="ml-2 text-sm text-slate-400">{step.text}</span>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Belts overview */}
      <section>
        <SectionTitle title="Parcours par ceinture" subtitle="De la blanche à la noire" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {BELTS.map((b) => {
            const techs = TECHNIQUES.filter((t) => t.belt === b.id)
            const learned = techs.filter((t) => isLearned(t.id)).length
            return (
              <Link
                key={b.id}
                to={`/curriculum?belt=${b.id}`}
                className="card group p-4 transition hover:border-accent/50"
              >
                <div className="mb-3 h-2 w-full rounded-full" style={{ background: b.color }} />
                <p className="display text-lg text-white">{b.label}</p>
                <p className="text-xs text-slate-500">{b.focus}</p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    {learned}/{techs.length}
                  </span>
                  <span className="text-accent-soft opacity-0 transition group-hover:opacity-100">→</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-700">
                  <div
                    className="h-full rounded-full bg-accent transition-all"
                    style={{ width: `${techs.length ? (learned / techs.length) * 100 : 0}%` }}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Principle of the day-ish */}
      <section>
        <SectionTitle title="Principe clé" subtitle="À garder en tête sur le tapis" />
        <div className="card p-5 md:p-6">
          <p className="text-2xl">{CONCEPTS[0].icon}</p>
          <p className="display mt-2 text-2xl text-white">{CONCEPTS[0].title}</p>
          <p className="mt-1 text-accent-soft">« {CONCEPTS[0].principle} »</p>
          <p className="mt-3 text-sm text-slate-400">{CONCEPTS[0].detail}</p>
          <Link to="/concepts" className="btn-ghost mt-4">
            Tous les concepts →
          </Link>
        </div>
      </section>

      {/* Recommended start */}
      <section>
        <SectionTitle title="Pour bien démarrer" subtitle="Les fondamentaux de la survie" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNIQUES.filter((t) => t.belt === 'white')
            .slice(0, 3)
            .map((t) => (
              <TechniqueCard key={t.id} t={t} learned={isLearned(t.id)} favorite={isFavorite(t.id)} />
            ))}
        </div>
      </section>
    </div>
  )
}

function Stat({ value, label, icon }: { value: number; label: string; icon: string }) {
  return (
    <div className="card flex items-center gap-3 p-5">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-xs text-slate-500">{label}</p>
      </div>
    </div>
  )
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="display text-2xl text-white md:text-3xl">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    </div>
  )
}
