import { useMemo, useState } from 'react'
import { TECHNIQUES } from '../data/curriculum'
import { CATEGORY_META } from '../data/meta'
import { beltById } from '../data/belts'

type Card = {
  question: string
  answer: string
  techId: string
  hint: string
}

// Deterministic shuffle seeded by a number (no Math.random in module scope)
function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Flashcards() {
  const [seed, setSeed] = useState(7)
  const cards = useMemo<Card[]>(() => {
    const base: Card[] = TECHNIQUES.map((t) => ({
      techId: t.id,
      question: t.concept,
      answer: t.name,
      hint: `${CATEGORY_META[t.category].label} · ${beltById(t.belt)!.focus}`,
    }))
    return shuffle(base, seed)
  }, [seed])

  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [score, setScore] = useState({ good: 0, seen: 0 })

  const card = cards[i]

  const advance = (good: boolean) => {
    setScore((s) => ({ good: s.good + (good ? 1 : 0), seen: s.seen + 1 }))
    setFlipped(false)
    setI((prev) => (prev + 1) % cards.length)
  }

  const restart = () => {
    setSeed((s) => s + 13)
    setI(0)
    setFlipped(false)
    setScore({ good: 0, seen: 0 })
  }

  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="display text-3xl text-white md:text-4xl">Quiz mémoire</h1>
          <p className="text-sm text-slate-500">
            Devine la technique à partir de son principe. Teste tes connaissances.
          </p>
        </div>
        <button onClick={restart} className="btn-ghost">
          🔀 Mélanger
        </button>
      </header>

      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>
          Carte {i + 1} / {cards.length}
        </span>
        <span>
          Score : <span className="font-bold text-emerald-400">{score.good}</span> / {score.seen}
        </span>
      </div>

      {/* Card */}
      <button
        onClick={() => setFlipped((f) => !f)}
        className="card grid min-h-[260px] w-full place-items-center p-8 text-center transition hover:border-accent/50"
      >
        {!flipped ? (
          <div>
            <p className="chip mx-auto mb-4 bg-accent/15 text-accent-soft">Quel est ce mouvement ?</p>
            <p className="text-lg leading-relaxed text-slate-200 md:text-xl">« {card.question} »</p>
            <p className="mt-6 text-xs uppercase tracking-widest text-slate-600">Touche pour révéler</p>
          </div>
        ) : (
          <div className="fade-in">
            <p className="text-xs uppercase tracking-widest text-slate-500">{card.hint}</p>
            <p className="display mt-2 text-4xl text-accent-soft md:text-5xl">{card.answer}</p>
            <p className="mt-6 text-xs uppercase tracking-widest text-slate-600">As-tu trouvé ?</p>
          </div>
        )}
      </button>

      {/* Controls */}
      {flipped ? (
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => advance(false)} className="btn bg-ink-700 text-slate-200 hover:bg-ink-600">
            ✗ Manqué
          </button>
          <button onClick={() => advance(true)} className="btn bg-emerald-600 text-white hover:bg-emerald-500">
            ✓ Trouvé
          </button>
        </div>
      ) : (
        <button onClick={() => setFlipped(true)} className="btn-primary w-full">
          Révéler la réponse
        </button>
      )}

      <a href={`#/technique/${card.techId}`} className="block text-center text-sm text-slate-500 hover:text-accent-soft">
        Voir la fiche complète de cette technique →
      </a>
    </div>
  )
}
