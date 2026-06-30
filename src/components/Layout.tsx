import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NAV = [
  { to: '/', label: 'Accueil', icon: '🏠', end: true },
  { to: '/curriculum', label: 'Programme', icon: '📚' },
  { to: '/concepts', label: 'Concepts', icon: '💡' },
  { to: '/flashcards', label: 'Quiz', icon: '🃏' },
  { to: '/log', label: 'Carnet', icon: '📓' },
  { to: '/progress', label: 'Progrès', icon: '📈' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <div className="min-h-full pb-24 md:pb-0 md:pl-60">
      {/* Sidebar (desktop) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-ink-700/60 bg-ink-900/80 p-5 backdrop-blur md:flex">
        <Brand />
        <nav className="mt-8 flex flex-col gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  isActive ? 'bg-accent/15 text-accent-soft' : 'text-slate-400 hover:bg-ink-700/60 hover:text-slate-200'
                }`
              }
            >
              <span className="text-base">{n.icon}</span>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <p className="mt-auto pt-6 text-[11px] leading-relaxed text-slate-600">
          Contenu pédagogique original. Inspiré de la méthode « survivre d'abord, position avant
          soumission ». Usage personnel.
        </p>
      </aside>

      {/* Topbar (mobile) */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink-700/60 bg-ink-900/85 px-4 py-3 backdrop-blur md:hidden">
        <Brand compact />
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-10">
        <div key={location.pathname} className="fade-in">
          {children}
        </div>
      </main>

      {/* Bottom nav (mobile) */}
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-ink-700/60 bg-ink-900/95 backdrop-blur md:hidden">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 py-2 text-[10px] font-semibold transition ${
                isActive ? 'text-accent-soft' : 'text-slate-500'
              }`
            }
          >
            <span className="text-lg">{n.icon}</span>
            {n.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

function Brand({ compact }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent">
        <div className="h-2.5 w-6 rounded-sm bg-white/90 ring-2 ring-black/30" />
      </div>
      <div className="leading-none">
        <p className="display text-xl text-white">BJJ PATH</p>
        {!compact && <p className="text-[10px] uppercase tracking-widest text-slate-500">Académie de Jiu-Jitsu</p>}
      </div>
    </div>
  )
}
