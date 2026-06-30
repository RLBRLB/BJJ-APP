import { Link } from 'react-router-dom'
import { TECHNIQUES } from '../data/curriculum'
import { BELTS } from '../data/belts'
import { CATEGORY_META, CATEGORY_ORDER } from '../data/meta'
import { useProgress } from '../hooks/useProgress'
import { useTrainingLog } from '../hooks/useTrainingLog'
import { ProgressRing } from '../components/ProgressRing'

export default function Progress() {
  const { state, isLearned } = useProgress()
  const { sessions } = useTrainingLog()
  const total = TECHNIQUES.length
  const done = state.learned.length

  const badges = computeBadges(done, total, sessions.length, state.favorites.length)

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center gap-4 text-center">
        <ProgressRing value={done / total} size={120} stroke={10} label="acquis" />
        <div>
          <h1 className="display text-3xl text-white md:text-4xl">Ta progression</h1>
          <p className="text-sm text-slate-500">
            {done} techniques sur {total} maîtrisées — continue comme ça !
          </p>
        </div>
      </header>

      {/* By belt */}
      <section>
        <h2 className="display mb-3 text-2xl text-white">Par ceinture</h2>
        <div className="space-y-3">
          {BELTS.map((b) => {
            const techs = TECHNIQUES.filter((t) => t.belt === b.id)
            const learned = techs.filter((t) => isLearned(t.id)).length
            const pct = techs.length ? learned / techs.length : 0
            return (
              <Link key={b.id} to={`/curriculum?belt=${b.id}`} className="card block p-4 transition hover:border-accent/40">
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-semibold text-white">
                    <span className="h-3 w-3 rounded-full" style={{ background: b.color }} />
                    {b.label}
                  </span>
                  <span className="text-sm text-slate-400">
                    {learned}/{techs.length}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-ink-700">
                  <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct * 100}%` }} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* By category */}
      <section>
        <h2 className="display mb-3 text-2xl text-white">Par domaine</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {CATEGORY_ORDER.map((c) => {
            const techs = TECHNIQUES.filter((t) => t.category === c)
            const learned = techs.filter((t) => isLearned(t.id)).length
            const pct = techs.length ? learned / techs.length : 0
            const meta = CATEGORY_META[c]
            return (
              <div key={c} className="card flex items-center gap-3 p-4">
                <ProgressRing value={pct} size={52} stroke={5} color={meta.color} />
                <div className="flex-1">
                  <p className="font-semibold text-white">
                    {meta.icon} {meta.label}
                  </p>
                  <p className="text-xs text-slate-500">
                    {learned}/{techs.length} techniques
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="display mb-3 text-2xl text-white">Récompenses</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {badges.map((bd) => (
            <div
              key={bd.id}
              className={`card flex flex-col items-center gap-1 p-4 text-center ${
                bd.earned ? '' : 'opacity-40 grayscale'
              }`}
            >
              <span className="text-3xl">{bd.icon}</span>
              <p className="text-sm font-semibold text-white">{bd.title}</p>
              <p className="text-[11px] text-slate-500">{bd.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function computeBadges(done: number, total: number, sessions: number, favorites: number) {
  return [
    { id: 'first', icon: '🌱', title: 'Premier pas', desc: '1 technique acquise', earned: done >= 1 },
    { id: 'ten', icon: '🔟', title: 'En route', desc: '10 techniques acquises', earned: done >= 10 },
    { id: 'survivor', icon: '🛡️', title: 'Survivant', desc: '5 techniques de survie', earned: done >= 5 },
    { id: 'half', icon: '⚔️', title: 'À mi-chemin', desc: '50% du programme', earned: done >= total / 2 },
    { id: 'log', icon: '📓', title: 'Assidu', desc: '5 sessions notées', earned: sessions >= 5 },
    { id: 'master', icon: '🏆', title: 'Ceinture noire', desc: '100% du programme', earned: done >= total },
    { id: 'fav', icon: '⭐', title: 'Collectionneur', desc: '5 favoris', earned: favorites >= 5 },
    { id: 'dedicated', icon: '🔥', title: 'Dévoué', desc: '15 sessions notées', earned: sessions >= 15 },
  ]
}
