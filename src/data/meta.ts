import type { Category } from '../types'

export const CATEGORY_META: Record<Category, { label: string; icon: string; color: string }> = {
  survival: { label: 'Survie', icon: '🛡️', color: '#94a3b8' },
  escapes: { label: 'Escapes', icon: '🏃', color: '#38bdf8' },
  guard: { label: 'Garde', icon: '🕸️', color: '#a78bfa' },
  passing: { label: 'Passages', icon: '⚡', color: '#fb923c' },
  control: { label: 'Contrôle', icon: '🪨', color: '#facc15' },
  submissions: { label: 'Soumissions', icon: '🔒', color: '#f87171' },
  takedowns: { label: 'Takedowns', icon: '🤼', color: '#34d399' },
}

export const CATEGORY_ORDER: Category[] = [
  'survival',
  'escapes',
  'guard',
  'passing',
  'control',
  'submissions',
  'takedowns',
]
