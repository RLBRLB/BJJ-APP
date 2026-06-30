import type { BeltInfo } from '../types'

export const BELTS: BeltInfo[] = [
  {
    id: 'white',
    label: 'Ceinture Blanche',
    color: '#e7e9ee',
    text: '#0a0c10',
    focus: 'Survie & défense',
    description:
      "Le tout premier objectif n'est pas de soumettre, mais de ne pas être soumis. On apprend à rester en sécurité sous la pression, à protéger son cou et ses bras, à respirer et à conserver une structure défensive solide dans les pires positions.",
  },
  {
    id: 'blue',
    label: 'Ceinture Bleue',
    color: '#2563eb',
    text: '#ffffff',
    focus: 'Escapes & remises en jeu',
    description:
      "Une fois que l'on survit, il faut savoir sortir. La bleue est la ceinture des escapes : retrouver sa garde, fuir les hanches, recomposer une position neutre depuis le dessous.",
  },
  {
    id: 'purple',
    label: 'Ceinture Violette',
    color: '#7c3aed',
    text: '#ffffff',
    focus: 'Le jeu de garde',
    description:
      "La garde devient une arme. Sweeps, conservation, déséquilibres et premières soumissions : on apprend à attaquer depuis le dessous et à dicter le rythme du combat.",
  },
  {
    id: 'brown',
    label: 'Ceinture Marron',
    color: '#92400e',
    text: '#ffffff',
    focus: 'Passages & contrôle',
    description:
      "On passe au-dessus. Passages de garde méthodiques, pression, transitions vers les positions dominantes et installation d'un contrôle qui étouffe les escapes adverses.",
  },
  {
    id: 'black',
    label: 'Ceinture Noire',
    color: '#111418',
    text: '#ffffff',
    focus: 'Finitions & systèmes',
    description:
      "La synthèse. Enchaînements de soumissions, chasses au dos, takedowns et lecture du combat : transformer chaque position dominante en finition de façon presque inévitable.",
  },
]

export const beltById = (id: string) => BELTS.find((b) => b.id === id)
