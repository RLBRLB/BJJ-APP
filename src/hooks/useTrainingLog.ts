import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export interface Session {
  id: string
  date: string
  durationMin: number
  rounds: number
  techniques: string
  notes: string
  type: 'gi' | 'nogi' | 'drilling' | 'open-mat'
}

export function useTrainingLog() {
  const [sessions, setSessions] = useLocalStorage<Session[]>('bjj-log', [])

  const add = useCallback(
    (s: Omit<Session, 'id'>) =>
      setSessions((prev) => [{ ...s, id: `${s.date}-${prev.length}-${s.rounds}` }, ...prev]),
    [setSessions],
  )

  const remove = useCallback(
    (id: string) => setSessions((prev) => prev.filter((s) => s.id !== id)),
    [setSessions],
  )

  return { sessions, add, remove }
}
