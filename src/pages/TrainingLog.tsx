import { useState } from 'react'
import { useTrainingLog, type Session } from '../hooks/useTrainingLog'

const TYPES: { id: Session['type']; label: string }[] = [
  { id: 'gi', label: 'Gi' },
  { id: 'nogi', label: 'No-Gi' },
  { id: 'drilling', label: 'Drilling' },
  { id: 'open-mat', label: 'Open mat' },
]

export default function TrainingLog() {
  const { sessions, add, remove } = useTrainingLog()
  const [open, setOpen] = useState(false)

  const today = useTodayISO()
  const [form, setForm] = useState<Omit<Session, 'id'>>({
    date: today,
    durationMin: 60,
    rounds: 5,
    techniques: '',
    notes: '',
    type: 'gi',
  })

  const totalMin = sessions.reduce((a, s) => a + s.durationMin, 0)
  const totalRounds = sessions.reduce((a, s) => a + s.rounds, 0)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    add(form)
    setForm({ ...form, techniques: '', notes: '' })
    setOpen(false)
  }

  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="display text-3xl text-white md:text-4xl">Carnet d'entraînement</h1>
          <p className="text-sm text-slate-500">Note tes sessions pour suivre ta régularité.</p>
        </div>
        <button onClick={() => setOpen((o) => !o)} className="btn-primary">
          {open ? 'Fermer' : '+ Session'}
        </button>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Stat value={sessions.length} label="sessions" />
        <Stat value={Math.round(totalMin / 60)} label="heures sur le tapis" />
        <Stat value={totalRounds} label="rounds combattus" />
      </div>

      {/* Form */}
      {open && (
        <form onSubmit={submit} className="card space-y-4 p-6 fade-in">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Date">
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="input"
                required
              />
            </Field>
            <Field label="Type">
              <div className="flex flex-wrap gap-2">
                {TYPES.map((tp) => (
                  <button
                    type="button"
                    key={tp.id}
                    onClick={() => setForm({ ...form, type: tp.id })}
                    className={`chip border ${
                      form.type === tp.id
                        ? 'border-accent bg-accent/15 text-accent-soft'
                        : 'border-ink-700 bg-ink-800 text-slate-400'
                    }`}
                  >
                    {tp.label}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Durée (min)">
              <input
                type="number"
                min={0}
                value={form.durationMin}
                onChange={(e) => setForm({ ...form, durationMin: +e.target.value })}
                className="input"
              />
            </Field>
            <Field label="Rounds / sparrings">
              <input
                type="number"
                min={0}
                value={form.rounds}
                onChange={(e) => setForm({ ...form, rounds: +e.target.value })}
                className="input"
              />
            </Field>
          </div>
          <Field label="Techniques travaillées">
            <input
              value={form.techniques}
              onChange={(e) => setForm({ ...form, techniques: e.target.value })}
              placeholder="Scissor sweep, escape de la monte…"
              className="input"
            />
          </Field>
          <Field label="Notes">
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Ce qui a marché, ce qu'il faut bosser…"
              rows={3}
              className="input resize-none"
            />
          </Field>
          <button type="submit" className="btn-primary w-full">
            Enregistrer la session
          </button>
        </form>
      )}

      {/* List */}
      {sessions.length === 0 ? (
        <div className="card grid place-items-center p-12 text-center text-slate-500">
          <p className="text-4xl">📓</p>
          <p className="mt-2">Aucune session enregistrée. Ajoute ta première !</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {sessions.map((s) => (
            <li key={s.id} className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip bg-accent/15 text-accent-soft">{labelType(s.type)}</span>
                  <span className="text-sm font-semibold text-white">{formatDate(s.date)}</span>
                  <span className="text-xs text-slate-500">
                    {s.durationMin} min · {s.rounds} rounds
                  </span>
                </div>
                <button
                  onClick={() => remove(s.id)}
                  className="text-slate-600 transition hover:text-accent"
                  title="Supprimer"
                >
                  🗑
                </button>
              </div>
              {s.techniques && (
                <p className="mt-2 text-sm text-slate-300">
                  <span className="text-slate-500">Techniques · </span>
                  {s.techniques}
                </p>
              )}
              {s.notes && <p className="mt-1 text-sm text-slate-400">{s.notes}</p>}
            </li>
          ))}
        </ul>
      )}

      <style>{`.input{width:100%;border-radius:0.75rem;border:1px solid #2a3344;background:#161b26;padding:0.6rem 0.8rem;font-size:0.875rem;color:#fff;outline:none}.input:focus{border-color:#e0413b}`}</style>
    </div>
  )
}

function useTodayISO() {
  // Avoid Date.now in render-sensitive scope at module load; compute lazily is fine in component
  const d = new Date()
  const tz = d.getTimezoneOffset() * 60000
  return new Date(d.getTime() - tz).toISOString().slice(0, 10)
}

function labelType(t: Session['type']) {
  return TYPES.find((x) => x.id === t)?.label ?? t
}

function formatDate(iso: string) {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="card p-4 text-center">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      {children}
    </label>
  )
}
