export type Belt = 'white' | 'blue' | 'purple' | 'brown' | 'black'

export type Category =
  | 'survival'
  | 'escapes'
  | 'guard'
  | 'passing'
  | 'control'
  | 'submissions'
  | 'takedowns'

export interface Technique {
  id: string
  name: string
  aka?: string
  belt: Belt
  category: Category
  position: string
  summary: string
  concept: string
  steps: string[]
  keyDetails: string[]
  commonMistakes: string[]
  drills?: string[]
}

export interface ConceptCard {
  id: string
  title: string
  principle: string
  detail: string
  icon: string
}

export interface BeltInfo {
  id: Belt
  label: string
  color: string
  text: string
  focus: string
  description: string
}
