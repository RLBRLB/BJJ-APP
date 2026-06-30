import { CONCEPTS } from '../data/concepts'

export default function Concepts() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="display text-3xl text-white md:text-4xl">Concepts fondamentaux</h1>
        <p className="text-sm text-slate-500">
          Les principes invisibles qui font fonctionner les techniques. À relire souvent.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {CONCEPTS.map((c) => (
          <article key={c.id} className="card p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-700 text-2xl">
                {c.icon}
              </span>
              <h2 className="display text-2xl text-white">{c.title}</h2>
            </div>
            <p className="mt-4 border-l-2 border-accent pl-3 text-accent-soft">« {c.principle} »</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.detail}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
