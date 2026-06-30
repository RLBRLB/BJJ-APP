import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export interface ProgressState {
  learned: string[]
  favorites: string[]
}

const INITIAL: ProgressState = { learned: [], favorites: [] }

export function useProgress() {
  const [state, setState] = useLocalStorage<ProgressState>('bjj-progress', INITIAL)

  const toggle = useCallback(
    (bucket: keyof ProgressState, id: string) => {
      setState((prev) => {
        const set = new Set(prev[bucket])
        set.has(id) ? set.delete(id) : set.add(id)
        return { ...prev, [bucket]: [...set] }
      })
    },
    [setState],
  )

  const isLearned = (id: string) => state.learned.includes(id)
  const isFavorite = (id: string) => state.favorites.includes(id)

  return {
    state,
    toggleLearned: (id: string) => toggle('learned', id),
    toggleFavorite: (id: string) => toggle('favorites', id),
    isLearned,
    isFavorite,
  }
}
