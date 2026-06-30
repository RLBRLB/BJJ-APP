import type { Technique } from '../types'

// Contenu original. Inspiré de la philosophie « survivre d'abord, position
// avant soumission » et de la progression par ceintures, mais rédigé
// indépendamment et décrivant des techniques de BJJ publiquement connues.

export const TECHNIQUES: Technique[] = [
  // ───────────────────────────── CEINTURE BLANCHE — SURVIE ─────────────────
  {
    id: 'survive-mount',
    name: 'Survivre sous la monte',
    aka: 'Posture défensive de la monte',
    belt: 'white',
    category: 'survival',
    position: 'Monte (dessous)',
    summary: "Rester en sécurité quand l'adversaire est assis sur ton torse.",
    concept:
      "La monte subie est l'une des pires positions. L'objectif n'est pas encore de sortir, mais de ne pas se faire soumettre ni retourner pendant que tu retrouves ton calme.",
    steps: [
      'Garde les coudes serrés contre tes côtes pour empêcher l\'adversaire de les isoler.',
      'Mains ouvertes au niveau de la poitrine ou du cou pour défendre les étranglements, sans pousser à l\'aveugle.',
      'Menton rentré et tête au sol pour protéger le cou.',
      'Crée de petits ponts pour recentrer l\'adversaire chaque fois qu\'il glisse vers ta tête (high mount).',
      'Respire lentement et attends l\'erreur : un appui de main au sol, un poids mal réparti.',
    ],
    keyDetails: [
      'Coudes collés : un bras qui s\'écarte devient un bras à attaquer.',
      'Ne pas pousser l\'adversaire à bout de bras — cela tend les coudes et offre des clés de bras.',
      'Empêcher la « high mount » est prioritaire : plus il monte vers les aisselles, moins tu peux ponter.',
    ],
    commonMistakes: [
      'Tendre les bras pour repousser → armbar offert.',
      'Tourner sur le ventre sans cadre → dos donné.',
      'Retenir sa respiration et paniquer → épuisement.',
    ],
    drills: ['Survie chronométrée 1 min sous la monte, sans tenter de sortir.'],
  },
  {
    id: 'survive-side-control',
    name: 'Survivre sous le contrôle latéral',
    aka: 'Frames en side control',
    belt: 'white',
    category: 'survival',
    position: 'Side control (dessous)',
    summary: "Créer de l'espace pour respirer et préparer l'escape sous la pression latérale.",
    concept:
      "Sous le side control, la pression poitrine-contre-poitrine vise à t'écraser. Tes cadres (frames) sont ce qui te garde en vie et t'empêche de subir la transition vers la monte.",
    steps: [
      'Place un avant-bras contre la hanche de l\'adversaire et l\'autre contre son cou/épaule : ce sont tes deux cadres.',
      'Tourne légèrement sur le côté, face à l\'adversaire, jamais à plat sur le dos.',
      'Genou le plus proche relevé pour bloquer le passage vers la monte.',
      'Garde les coudes intérieurs pour ne pas laisser passer le « crossface ».',
      'Maintiens un peu d\'espace avec les cadres pour pouvoir shrimper ensuite.',
    ],
    keyDetails: [
      'Le cadre travaille sur le squelette (os contre os), pas sur la force musculaire.',
      'Être légèrement sur le flanc, pas à plat : à plat, on se fait aplatir.',
      'Le genou proche est une barrière contre la montée en monte.',
    ],
    commonMistakes: [
      'Rester à plat sur le dos → écrasement et perte des hanches.',
      'Pousser des deux bras tendus → l\'adversaire passe à la monte par-dessus.',
      'Laisser le crossface s\'installer → tête tournée, escape impossible.',
    ],
  },
  {
    id: 'survive-back',
    name: 'Survivre au contrôle du dos',
    aka: 'Défense de l\'étranglement arrière',
    belt: 'white',
    category: 'survival',
    position: 'Back control (dessous)',
    summary: "Protéger son cou en priorité absolue quand l'adversaire est dans ton dos.",
    concept:
      "Dans le dos, la seule chose qui compte d'abord est ton cou. Tant que le bras d'étranglement ne passe pas sous ton menton, tu survis et tu peux travailler à sortir.",
    steps: [
      'Menton vissé contre la poitrine et mains qui défendent la ligne du cou.',
      'Une main combat le poignet d\'attaque, l\'autre garde le col/épaule.',
      'Tourne le menton vers le côté du bras qui cherche l\'étranglement pour bloquer sa course.',
      'Descends ton dos vers le sol du côté de l\'épaule où il n\'a pas son bras, pour aplatir un crochet.',
      'Une fois une épaule au sol, commence à faire glisser tes hanches au sol pour t\'extraire.',
    ],
    keyDetails: [
      'Deux mains sur la défense du cou valent mieux qu\'une attaque précipitée.',
      'Va toujours vers le sol du côté faible (sans bras d\'attaque).',
      'Ne pas arracher les crochets avec les mains : ce sont elles qui défendent le cou.',
    ],
    commonMistakes: [
      'Lâcher le cou pour attraper les jambes → étranglement immédiat.',
      'Tourner du mauvais côté (vers le bras d\'attaque) → on s\'enroule dans le choke.',
    ],
  },
  {
    id: 'survive-knee-on-belly',
    name: 'Survivre au genou sur le ventre',
    aka: 'Knee on belly (dessous)',
    belt: 'white',
    category: 'survival',
    position: 'Knee on belly (dessous)',
    summary: 'Encaisser la pression du genou sur le ventre sans donner le dos ni les bras.',
    concept:
      "Le genou sur le ventre est inconfortable et mobile. La survie passe par gérer la pression et créer l'instant pour replacer un cadre sur le genou.",
    steps: [
      'Tourne légèrement vers l\'adversaire et place une main sur son genou, l\'autre sur sa hanche.',
      'Pousse le genou vers tes pieds pour soulager la pression abdominale.',
      'Garde le coude proche collé pour ne pas offrir le bras à une clé.',
      'Crée un pont court pour décoller le poids et glisser une hanche.',
      'Vise à ramener tes genoux vers ta poitrine pour reformer une garde.',
    ],
    keyDetails: [
      'Le cadre sur le genou de l\'adversaire est ce qui recrée de l\'espace.',
      'Ne jamais tendre les deux bras vers le haut : double invitation à l\'armbar.',
    ],
    commonMistakes: [
      'Paniquer et tendre les bras → bras et dos exposés.',
      'Se mettre à plat → la pression devient ingérable.',
    ],
  },
  {
    id: 'guard-defensive-posture',
    name: 'Posture défensive en garde (dessous)',
    aka: 'Survie de la garde fermée',
    belt: 'white',
    category: 'survival',
    position: 'Garde fermée (dessous)',
    summary: "Empêcher l'adversaire de prendre une posture confortable et de passer ta garde.",
    concept:
      "Avoir la garde fermée, c'est déjà être en sécurité — à condition de casser la posture de l'adversaire et de gérer ses mains.",
    steps: [
      'Crochets de jambes verrouillés derrière le dos de l\'adversaire, talons serrés.',
      'Contrôle au moins une de ses manches/poignets pour limiter ses appuis.',
      'Contrôle sa tête/nuque pour casser sa posture vers l\'avant.',
      'Bouge tes hanches d\'un côté puis de l\'autre pour l\'empêcher de se stabiliser.',
      'Si sa posture monte, réengage le contrôle de tête avant qu\'il n\'ouvre ta garde.',
    ],
    keyDetails: [
      'Tête baissée de l\'adversaire = posture cassée = il ne peut pas passer.',
      'Contrôler les poignets prive l\'adversaire de ses points d\'appui.',
    ],
    commonMistakes: [
      'Laisser l\'adversaire se redresser et poser ses mains sur ton ventre → ouverture de garde.',
      'Garder les jambes molles → garde facile à ouvrir.',
    ],
  },
  {
    id: 'protect-the-neck',
    name: 'La règle d\'or : protéger le cou',
    belt: 'white',
    category: 'survival',
    position: 'Toutes positions inférieures',
    summary: 'Le principe défensif qui prime sur tous les autres dans les positions subies.',
    concept:
      "Avant la sortie, avant la contre-attaque, il y a une priorité non négociable : le cou. Un bras isolé se récupère ; un étranglement bouclé met fin au combat.",
    steps: [
      'Menton constamment rentré contre la poitrine.',
      'Coudes serrés pour fermer les voies d\'accès au cou.',
      'En cas de doute, deux mains défendent la ligne du cou avant tout le reste.',
      'Ne « troque » jamais une défense de cou contre une tentative de sortie risquée.',
    ],
    keyDetails: [
      'Le menton rentré supprime l\'espace nécessaire à la plupart des étranglements.',
      'Survivre, c\'est hiérarchiser : cou > bras > position.',
    ],
    commonMistakes: [
      'Lever le menton pour regarder → cou offert.',
      'Lâcher la défense du cou pour défendre un bras → choke.',
    ],
  },
  {
    id: 'technical-standup',
    name: 'Relevé technique en base',
    aka: 'Technical stand-up',
    belt: 'white',
    category: 'survival',
    position: 'Assis / debout',
    summary: 'Se relever du sol en gardant une base et une protection face à l\'adversaire.',
    concept:
      "Se relever maladroitement, c'est se faire renverser ou frapper. Le relevé technique te remet debout sans jamais tourner le dos ni perdre l'équilibre.",
    steps: [
      'Depuis assis, pose une main au sol derrière toi et le pied opposé à plat devant.',
      'Lève les hanches en appui sur la main arrière et le pied avant.',
      'Glisse la jambe arrière sous toi pour te placer en fente.',
      'Garde l\'autre avant-bras/poing devant ton visage comme protection.',
      'Reviens debout en gardant le poids centré et le regard sur l\'adversaire.',
    ],
    keyDetails: [
      'Le bras de protection reste levé tout le long du mouvement.',
      'Le poids reste entre les appuis, jamais penché vers l\'adversaire.',
    ],
    commonMistakes: [
      'Se relever en tournant le dos → projection ou prise de dos.',
      'Mettre les deux mains au sol → visage et équilibre exposés.',
    ],
  },

  // ───────────────────────────── CEINTURE BLEUE — ESCAPES ──────────────────
  {
    id: 'mount-escape-upa',
    name: 'Escape de la monte — Upa (pont & roulade)',
    aka: 'Bridge and roll',
    belt: 'blue',
    category: 'escapes',
    position: 'Monte (dessous)',
    summary: 'Renverser l\'adversaire monté en piégeant un bras et une jambe puis en pontant.',
    concept:
      "Quand l'adversaire pose une main au sol ou pèse trop vers ta tête, le pont l'envoie par-dessus son épaule sans appui : tu te retrouves dans sa garde, position bien plus sûre.",
    steps: [
      'Piège le bras de l\'adversaire du côté où tu veux le renverser, collé contre ton torse.',
      'Bloque son pied du même côté avec ton pied (il ne pourra pas poser de jambe d\'appui).',
      'Plante ton autre pied et tes épaules pour ponter explosivement vers le haut et le côté piégé.',
      'Roule par-dessus ton épaule en gardant le bras et la jambe piégés.',
      'Termine à l\'intérieur de sa garde, posture haute.',
    ],
    keyDetails: [
      'Bras ET jambe du même côté piégés : sinon il pose un appui et ne tombe pas.',
      'Le pont va vers le haut (par-dessus ta tête), pas seulement sur le côté.',
      'Profiter du moment où il pose une main au sol pour s\'avancer.',
    ],
    commonMistakes: [
      'Ponter sans piéger la jambe → l\'adversaire « poste » et reste monté.',
      'Pousser des bras au lieu de ponter des hanches → pas assez de puissance.',
    ],
    drills: ['Upa des deux côtés, 10 répétitions par côté, partenaire passif puis résistant léger.'],
  },
  {
    id: 'mount-escape-elbow',
    name: 'Escape de la monte — Fuite de hanche',
    aka: 'Elbow escape / shrimp to guard',
    belt: 'blue',
    category: 'escapes',
    position: 'Monte (dessous)',
    summary: 'Récupérer sa garde depuis la monte en dégageant les hanches et en glissant une jambe.',
    concept:
      "Plus technique que l'upa, l'elbow escape recrée ta garde sans avoir besoin de renverser l'adversaire : tu fuis les hanches et tu reconstruis tes jambes entre vous.",
    steps: [
      'Crée un petit pont pour décoller le poids et glisse tes deux coudes à l\'intérieur de ses cuisses.',
      'Shrimp (fuite de hanche) sur un côté pour ouvrir de l\'espace.',
      'Glisse le genou du côté de la fuite à travers l\'espace créé, sous sa cuisse.',
      'Récupère d\'abord la demi-garde, puis répète de l\'autre côté pour reformer la garde fermée.',
      'Referme la garde dès que tes deux jambes sont passées.',
    ],
    keyDetails: [
      'Pont court juste pour créer l\'espace, puis fuite de hanche : c\'est l\'enchaînement clé.',
      'Les coudes restent à l\'intérieur des cuisses pour empêcher la high mount.',
      'Petits pas : demi-garde d\'abord, garde complète ensuite.',
    ],
    commonMistakes: [
      'Vouloir tout faire en un seul mouvement → la jambe ne passe pas.',
      'Laisser les coudes sortir → l\'adversaire remonte en high mount.',
    ],
  },
  {
    id: 'side-escape-guard',
    name: 'Escape du side control — récupérer la garde',
    aka: 'Shrimp to guard',
    belt: 'blue',
    category: 'escapes',
    position: 'Side control (dessous)',
    summary: 'Replacer un genou entre soi et l\'adversaire pour reconstruire sa garde.',
    concept:
      "Avec de bons cadres, tu transformes l'espace défensif en espace offensif : tu fuis la hanche et tu insères le genou pour reformer la garde.",
    steps: [
      'Installe tes cadres : avant-bras sur la hanche, avant-bras sur le cou/épaule.',
      'Shrimp loin de l\'adversaire pour créer de l\'espace entre vos hanches.',
      'Insère le genou proche dans cet espace, tibia contre son ventre.',
      'Pousse sur le cadre de hanche pendant que tu ramènes la deuxième jambe.',
      'Referme la garde ou installe une garde ouverte stable.',
    ],
    keyDetails: [
      'Le cadre de hanche empêche l\'adversaire de te suivre quand tu shrimpes.',
      'Le genou entre les deux corps est le « stop » qui rétablit la distance.',
    ],
    commonMistakes: [
      'Shrimper sans cadre → l\'adversaire colle et suit le mouvement.',
      'Pousser uniquement avec les bras → pas de hanche, pas d\'espace.',
    ],
  },
  {
    id: 'side-escape-knees',
    name: 'Escape du side control — vers les genoux',
    aka: 'Escape to turtle / single leg',
    belt: 'blue',
    category: 'escapes',
    position: 'Side control (dessous)',
    summary: 'Se retourner sur les genoux quand récupérer la garde n\'est pas possible.',
    concept:
      "Si l'adversaire suit trop bien tes hanches, l'autre voie est de te retourner vers lui sur les genoux et d'enchaîner sur une remise debout ou une attaque de jambe.",
    steps: [
      'Profite d\'un crossface relâché pour ramener ton coude de l\'autre côté de son corps.',
      'Tourne sur le ventre/les genoux en gardant les coudes serrés (position « tortue » protégée).',
      'Saisis une jambe de l\'adversaire (single leg) si elle est à portée.',
      'Relève-toi en base ou avance pour le renverser vers l\'arrière.',
    ],
    keyDetails: [
      'Se retourner seulement quand le crossface n\'est plus dur, sinon on offre le dos.',
      'Coudes au corps en tortue : pas d\'espace pour les crochets de dos.',
    ],
    commonMistakes: [
      'Se retourner sous un crossface solide → dos donné.',
      'Rester passif en tortue → l\'adversaire installe le contrôle du dos.',
    ],
  },
  {
    id: 'back-escape',
    name: 'Escape du contrôle du dos',
    aka: 'Back escape to side',
    belt: 'blue',
    category: 'escapes',
    position: 'Back control (dessous)',
    summary: 'Faire glisser ses épaules au sol pour se dégager du contrôle du dos en sécurité.',
    concept:
      "Après avoir défendu ton cou, l'escape consiste à amener tes épaules au sol du côté faible et à faire passer ton dos devant ses hanches.",
    steps: [
      'Cou défendu, identifie le côté où l\'adversaire n\'a pas son bras d\'étranglement (côté faible).',
      'Laisse-toi glisser vers le sol de ce côté, en aplatissant le crochet inférieur.',
      'Marche tes épaules vers le sol jusqu\'à ce que ton dos repose sur le tapis devant ses hanches.',
      'Garde le cou protégé jusqu\'à la toute fin et arrive dans son side control… mais en sécurité.',
      'Reprends tes cadres pour enchaîner sur l\'escape du side control.',
    ],
    keyDetails: [
      'Toujours sortir du côté sans bras d\'attaque.',
      'Ne jamais lâcher la défense du cou tant que les épaules ne sont pas au sol.',
    ],
    commonMistakes: [
      'Sortir du mauvais côté → on s\'enroule dans l\'étranglement.',
      'Lever le menton pendant la sortie → choke offert au dernier moment.',
    ],
  },
  {
    id: 'north-south-escape',
    name: 'Escape du nord-sud',
    belt: 'blue',
    category: 'escapes',
    position: 'Nord-sud (dessous)',
    summary: 'Se dégager quand l\'adversaire contrôle ta tête à l\'envers, tête à tête.',
    concept:
      "En nord-sud, l'adversaire pèse sur ta tête et tes épaules. La sortie passe par cadrer ses hanches et tourner pour retrouver tes jambes face à lui.",
    steps: [
      'Place tes mains/avant-bras en cadre sur ses hanches pour décoller le poids de ta tête.',
      'Bouge ta tête sur le côté pour sortir de l\'axe de pression.',
      'Shrimp et tourne pour ramener tes genoux face à lui.',
      'Récupère la garde ou reviens sur tes genoux.',
    ],
    keyDetails: [
      'Le cadre sur les hanches est la clé pour ne pas être écrasé.',
      'Sortir la tête de l\'axe avant de tourner les hanches.',
    ],
    commonMistakes: [
      'Garder la tête dans l\'axe → on subit toute la pression.',
      'Tourner sans cadre → l\'adversaire suit et reprend le contrôle.',
    ],
  },
  {
    id: 'kob-escape',
    name: 'Escape du genou sur le ventre',
    belt: 'blue',
    category: 'escapes',
    position: 'Knee on belly (dessous)',
    summary: 'Transformer le cadre sur le genou en récupération de garde.',
    concept:
      "Le genou sur le ventre est instable par nature : un bon cadre sur le genou et une fuite de hanche suffisent souvent à reformer la garde.",
    steps: [
      'Place une main sur le genou posé sur ton ventre, l\'autre en cadre sur sa hanche.',
      'Pousse le genou vers tes pieds tout en shrimpant pour t\'éloigner.',
      'Insère ton genou proche dans l\'espace créé.',
      'Ramène la deuxième jambe et referme la garde.',
    ],
    keyDetails: [
      'Pousser le genou « vers le bas du corps », pas vers le haut.',
      'Coordonner poussée du genou et fuite de hanche dans le même temps.',
    ],
    commonMistakes: [
      'Tendre les deux bras → clé de bras (armbar) immédiate.',
      'Shrimper sans gérer le genou → l\'adversaire le replace.',
    ],
  },

  // ───────────────────────────── CEINTURE VIOLETTE — GARDE ─────────────────
  {
    id: 'break-posture',
    name: 'Casser la posture en garde fermée',
    belt: 'purple',
    category: 'guard',
    position: 'Garde fermée (dessous)',
    summary: 'Détruire la posture de l\'adversaire pour ouvrir tes attaques depuis la garde.',
    concept:
      "Aucune attaque de garde ne fonctionne contre une posture droite. Casser la posture (tête baissée, dos courbé) est la condition préalable à tous les sweeps et soumissions.",
    steps: [
      'Contrôle un poignet et la nuque de l\'adversaire.',
      'Tire la nuque vers le bas tout en serrant tes genoux et en remontant tes talons.',
      'Garde ses hanches collées aux tiennes pour qu\'il ne puisse pas se redresser.',
      'Dès que sa tête est basse, enchaîne vers une attaque (sweep, étranglement, clé).',
    ],
    keyDetails: [
      'Tirer avec le dos et les jambes, pas seulement les bras.',
      'Casser la posture AVANT de chercher la finition.',
    ],
    commonMistakes: [
      'Attaquer contre une posture droite → échec et passage de garde subi.',
      'Lâcher le contrôle des mains → l\'adversaire se repositionne.',
    ],
  },
  {
    id: 'scissor-sweep',
    name: 'Scissor sweep',
    aka: 'Balayage en ciseaux',
    belt: 'purple',
    category: 'guard',
    position: 'Garde fermée (dessous)',
    summary: 'Renverser l\'adversaire en ciseautant les jambes après avoir déséquilibré.',
    concept:
      "Un classique : tu charges le poids de l'adversaire sur un côté affaibli, puis tes jambes agissent comme des ciseaux pour le faire basculer et finir monté.",
    steps: [
      'Contrôle un col/épaule et une manche/poignet du même côté.',
      'Ouvre la garde et place un tibia en travers de son ventre (jambe « lame »).',
      'Pose l\'autre pied au sol et amène l\'adversaire à charger son poids vers ton tibia.',
      'Tire le bras contrôlé en travers et ciseaute : tibia qui pousse, jambe basse qui fauche.',
      'Suis le mouvement pour terminer en monte.',
    ],
    keyDetails: [
      'Casser la posture et créer l\'angle avant de ciseauter.',
      'Le tibia en travers du ventre est le levier principal du renversement.',
      'Tirer le bras l\'empêche de poster pour se rattraper.',
    ],
    commonMistakes: [
      'Ciseauter sans déséquilibrer d\'abord → l\'adversaire reste planté.',
      'Oublier de tirer le bras → il pose une main et bloque le sweep.',
    ],
    drills: ['Enchaînement scissor sweep → consolidation de la monte, 10 reps.'],
  },
  {
    id: 'hip-bump-sweep',
    name: 'Hip bump sweep',
    aka: 'Balayage par coup de hanche',
    belt: 'purple',
    category: 'guard',
    position: 'Garde fermée (dessous)',
    summary: 'Se redresser et renverser l\'adversaire vers l\'arrière par un coup de hanche.',
    concept:
      "Quand l'adversaire est assis haut et postérieur, tu te redresses en t'asseyant et tu utilises tes hanches pour le faire basculer sur le dos.",
    steps: [
      'Ouvre la garde et assieds-toi en posant une main au sol derrière toi.',
      'Passe ton autre bras par-dessus son bras/épaule du côté opposé pour bloquer son appui.',
      'Avance tes hanches contre son flanc.',
      'Donne un coup de hanche en pivotant pour le renverser sur le dos.',
      'Termine monté.',
    ],
    keyDetails: [
      'Bloquer le bras d\'appui de l\'adversaire est essentiel, sinon il se rattrape.',
      'Le moteur du renversement, ce sont les hanches, pas le bras.',
    ],
    commonMistakes: [
      'Ne pas contrôler le bras d\'appui → l\'adversaire poste et résiste.',
      'Rester trop loin de ses hanches → pas de levier.',
    ],
  },
  {
    id: 'pendulum-sweep',
    name: 'Pendulum / flower sweep',
    aka: 'Balayage pendule',
    belt: 'purple',
    category: 'guard',
    position: 'Garde fermée (dessous)',
    summary: 'Utiliser le balancier des jambes pour renverser un adversaire au sol.',
    concept:
      "En contrôlant un bras et une jambe du même côté, le balancier de tes jambes (pendule) renverse l'adversaire de côté et te place directement en monte.",
    steps: [
      'Contrôle la manche/poignet d\'un bras et glisse ton autre main pour saisir derrière son genou opposé.',
      'Ouvre la garde et crée un angle en pivotant sur le côté.',
      'Lance la jambe haute vers le ciel (le « pendule ») pendant que l\'autre fauche au sol.',
      'Le balancier renverse l\'adversaire ; suis le mouvement.',
      'Termine en monte.',
    ],
    keyDetails: [
      'Contrôler bras et jambe du même côté retire les deux appuis de l\'adversaire.',
      'L\'angle (pivot des hanches) précède le coup de pendule.',
    ],
    commonMistakes: [
      'Pendule sans angle → manque de puissance.',
      'Oublier la jambe → l\'adversaire poste avec et bloque.',
    ],
  },
  {
    id: 'triangle-from-guard',
    name: 'Triangle depuis la garde',
    aka: 'Étranglement en triangle',
    belt: 'purple',
    category: 'submissions',
    position: 'Garde fermée (dessous)',
    summary: 'Étrangler l\'adversaire avec les jambes en piégeant tête et un bras.',
    concept:
      "Le triangle utilise tes jambes pour étrangler en isolant un bras dedans et la tête : l'artère est comprimée par la propre épaule de l'adversaire et ta cuisse.",
    steps: [
      'Contrôle les deux poignets et pousse un bras vers l\'intérieur, garde l\'autre dehors.',
      'Place un pied sur sa hanche, monte une jambe par-dessus son épaule (bras dedans, bras dehors).',
      'Verrouille ta cheville derrière ton genou opposé pour fermer la figure du triangle.',
      'Crée un angle en pivotant sur le côté du bras resté dedans.',
      'Tire la tête vers le bas et serre les genoux pour finir.',
    ],
    keyDetails: [
      'Un bras dedans, un bras dehors : sans cela, ce n\'est pas un étranglement.',
      'L\'angle est ce qui rend le triangle vraiment serré.',
      'Tirer la tête + serrer les genoux = pression d\'étranglement.',
    ],
    commonMistakes: [
      'Triangle « à plat » sans angle → l\'adversaire se redresse et passe.',
      'Les deux bras dedans ou dehors → pas de compression.',
    ],
  },
  {
    id: 'armbar-from-guard',
    name: 'Clé de bras depuis la garde',
    aka: 'Armbar / juji-gatame',
    belt: 'purple',
    category: 'submissions',
    position: 'Garde fermée (dessous)',
    summary: 'Hyperextension du coude en pivotant à 90° depuis la garde.',
    concept:
      "Quand l'adversaire tend un bras ou pose une main sur ton torse, tu pivotes pour aligner ses hanches et isoler le coude entre tes cuisses.",
    steps: [
      'Contrôle un bras tendu, collé contre ta poitrine, pouce vers le haut.',
      'Place un pied sur sa hanche et crée un angle à 90° en pivotant.',
      'Monte la jambe par-dessus sa tête, serre les genoux autour du bras.',
      'Garde son poignet collé à ta poitrine et descends ses épaules.',
      'Lève les hanches doucement pour étendre le coude.',
    ],
    keyDetails: [
      'Le pivot à 90° est ce qui place tes jambes pour finir.',
      'Pouce vers le haut : l\'articulation est alignée pour l\'hyperextension.',
      'Serrer les genoux empêche l\'adversaire de dégager le bras.',
    ],
    commonMistakes: [
      'Ne pas pivoter → angle plat, finition impossible.',
      'Genoux ouverts → le bras s\'échappe.',
      'Tirer brutalement → privilégie toujours le contrôle progressif.',
    ],
  },
  {
    id: 'kimura-from-guard',
    name: 'Kimura depuis la garde',
    aka: 'Clé d\'épaule double',
    belt: 'purple',
    category: 'submissions',
    position: 'Garde fermée (dessous)',
    summary: 'Clé d\'épaule en figure-four sur un bras posé au sol.',
    concept:
      "Quand l'adversaire pose une main au sol près de toi, la kimura saisit ce poignet et tord l'épaule via une prise en figure-four très puissante.",
    steps: [
      'Saisis le poignet de l\'adversaire de ta main opposée.',
      'Assieds-toi et passe ton autre bras par-dessus son bras pour saisir ton propre poignet (figure-four).',
      'Reviens sur le dos en gardant son bras collé.',
      'Place une jambe par-dessus son dos pour l\'empêcher de rouler.',
      'Remonte le poignet dans son dos pour la finition.',
    ],
    keyDetails: [
      'La prise en figure-four démultiplie la force sur l\'épaule.',
      'La jambe sur le dos empêche l\'escape par roulade.',
    ],
    commonMistakes: [
      'Laisser l\'adversaire coller son bras à son corps → finition bloquée.',
      'Ne pas contrôler le roulé → escape facile.',
    ],
  },
  {
    id: 'cross-collar-choke',
    name: 'Étranglement croisé (col)',
    aka: 'Cross collar choke',
    belt: 'purple',
    category: 'submissions',
    position: 'Garde fermée (dessous)',
    summary: 'Étrangler avec les revers du kimono en croisant les prises.',
    concept:
      "Avec le gi, les deux mains saisissent les revers en croix et créent un étranglement en serrant les coudes et en tirant : le tissu fait le travail sur les carotides.",
    steps: [
      'Casse la posture de l\'adversaire.',
      'Glisse une main profondément dans son col, paume vers le haut.',
      'Insère la deuxième main par-dessus la première, dans l\'autre col.',
      'Tire l\'adversaire vers toi et serre les coudes vers l\'intérieur.',
      'Rapproche tes poings de tes propres oreilles pour finir.',
    ],
    keyDetails: [
      'Les prises doivent être profondes dans le col pour atteindre les carotides.',
      'On serre en écartant peu : ce sont les coudes qui ferment l\'étranglement.',
    ],
    commonMistakes: [
      'Prises trop superficielles → pas de pression.',
      'Étrangler la trachée plutôt que les carotides → moins efficace et douloureux inutilement.',
    ],
  },
  {
    id: 'open-guard-retention',
    name: 'Conservation de la garde ouverte',
    aka: 'Guard retention',
    belt: 'purple',
    category: 'guard',
    position: 'Garde ouverte (dessous)',
    summary: 'Garder ses jambes entre soi et l\'adversaire face à un passeur.',
    concept:
      "Conserver sa garde, c'est replacer en permanence ses jambes et ses hanches face à l'adversaire qui cherche à passer. La garde se défend par la mobilité, pas par la force.",
    steps: [
      'Reste mobile sur les épaules et les hanches, jamais à plat.',
      'Garde au moins un pied ou un genou pointé vers les hanches de l\'adversaire.',
      'Pivote constamment pour rester face à lui (face the opponent).',
      'Réinsère un genou ou un cadre dès qu\'il s\'approche d\'un côté.',
      'Utilise des poussées de pied (push) pour recréer la distance.',
    ],
    keyDetails: [
      'Toujours rester « face » à l\'adversaire : la garde se perd quand on lui montre le côté.',
      'Mobilité des hanches > force des jambes.',
    ],
    commonMistakes: [
      'Rester à plat sur le dos → passage immédiat.',
      'Croiser les pieds/se figer → garde rigide et contournable.',
    ],
  },
  {
    id: 'distance-management',
    name: 'Gestion de la distance en garde ouverte',
    belt: 'purple',
    category: 'guard',
    position: 'Garde ouverte (dessous)',
    summary: 'Contrôler trois distances pour ne jamais subir le passage.',
    concept:
      "La garde ouverte se joue sur la distance : loin (pieds), moyenne (tibias/genoux), proche (mains/crochets). Savoir laquelle utiliser à chaque instant évite le passage.",
    steps: [
      'Distance longue : pieds sur les hanches/biceps pour repousser.',
      'Distance moyenne : tibias en cadre pour bloquer l\'avancée.',
      'Distance courte : crochets et grips pour contrôler et attaquer.',
      'Recule d\'une distance à l\'autre quand l\'adversaire force, puis réattaque.',
    ],
    keyDetails: [
      'Ne jamais laisser l\'adversaire fermer la distance sans contrepartie (un grip, un cadre).',
      'Chaque distance a ses sweeps : choisis l\'attaque selon la distance.',
    ],
    commonMistakes: [
      'Laisser franchir les trois distances d\'un coup → passage.',
      'Rester collé quand il faudrait repousser (et inversement).',
    ],
  },

  // ───────────────────────────── CEINTURE MARRON — PASSAGES/CONTRÔLE ───────
  {
    id: 'knee-slice-pass',
    name: 'Passage genou coupé',
    aka: 'Knee slice / knee cut',
    belt: 'brown',
    category: 'passing',
    position: 'Garde ouverte (dessus)',
    summary: 'Trancher la garde en glissant le genou par-dessus la cuisse adverse.',
    concept:
      "Le passage genou coupé tranche la demi-garde/garde ouverte en faisant glisser ton genou à travers, tout en contrôlant le haut du corps pour empêcher la récupération.",
    steps: [
      'Prends un sous-crochet (underhook) ou un contrôle du col côté passage et un contrôle de la manche opposée.',
      'Place ton genou en travers de la cuisse de l\'adversaire, pointe du pied active.',
      'Garde ton poids vers l\'avant, poitrine sur poitrine, tête côté passage.',
      'Glisse le genou jusqu\'au sol en gardant le pied arrière qui pousse.',
      'Atterris en side control en consolidant le crossface et le sous-crochet.',
    ],
    keyDetails: [
      'Le contrôle du haut du corps empêche l\'adversaire de récupérer la garde ou de prendre ton dos.',
      'Poids vers l\'avant : sans pression, l\'adversaire réinsère son genou.',
    ],
    commonMistakes: [
      'Passer la jambe sans contrôler le haut → l\'adversaire prend le dos.',
      'Rester droit → pas de pression, garde récupérée.',
    ],
    drills: ['Knee slice → side control → consolidation, en flux continu.'],
  },
  {
    id: 'toreando-pass',
    name: 'Passage toréador',
    aka: 'Toreando / bullfighter pass',
    belt: 'brown',
    category: 'passing',
    position: 'Garde ouverte (dessus)',
    summary: 'Écarter les jambes de l\'adversaire comme une cape pour contourner la garde.',
    concept:
      "Le toréador contrôle les jambes de l'adversaire par les pantalons/chevilles, les écarte sur un côté, et tu cours autour pour atterrir en side control.",
    steps: [
      'Saisis les deux jambes de pantalon au niveau des genoux/chevilles, bras tendus.',
      'Plaque ses jambes vers le sol et sur un côté pour dégager le passage.',
      'Avance rapidement en cercle vers le côté opposé à ses pieds.',
      'Lâche les jambes au dernier moment pour plaquer le haut du corps.',
      'Atterris en side control ou knee on belly.',
    ],
    keyDetails: [
      'Garder les bras tendus pour rester hors de portée de ses jambes.',
      'La vitesse et l\'angle priment : on contourne, on ne force pas en force.',
    ],
    commonMistakes: [
      'Bras pliés → l\'adversaire réinsère ses jambes/crochets.',
      'Passer en ligne droite → l\'adversaire suit avec ses hanches.',
    ],
  },
  {
    id: 'stack-pass',
    name: 'Passage en empilement',
    aka: 'Stack pass / double under',
    belt: 'brown',
    category: 'passing',
    position: 'Garde fermée/ouverte (dessus)',
    summary: 'Plier l\'adversaire sur lui-même pour passer par-dessus.',
    concept:
      "En soulevant les hanches de l'adversaire et en l'empilant sur ses propres épaules, tu neutralises ses jambes et tu marches autour pour passer.",
    steps: [
      'Passe tes deux bras sous ses cuisses (double under) et joins les mains.',
      'Soulève ses hanches et empile-le sur ses épaules, son poids vers sa tête.',
      'Avance pour stabiliser l\'empilement, tête contre sa hanche.',
      'Marche vers un côté pour faire glisser ses jambes par-dessus ton épaule.',
      'Descends en side control en libérant la tête.',
    ],
    keyDetails: [
      'Empiler met le poids de l\'adversaire contre lui et bloque ses hanches.',
      'Avancer la pression empêche le triangle ou l\'oméoplate.',
    ],
    commonMistakes: [
      'Empiler sans avancer → l\'adversaire récupère ou attaque un triangle.',
      'Lever la tête → étranglement ou oméoplate possible.',
    ],
  },
  {
    id: 'side-control-consolidation',
    name: 'Installer un side control solide',
    aka: 'Crossface & underhook',
    belt: 'brown',
    category: 'control',
    position: 'Side control (dessus)',
    summary: 'Verrouiller le contrôle latéral pour tuer les escapes adverses.',
    concept:
      "Un side control n'est dominant que s'il retire les escapes : le crossface bloque la tête, le sous-crochet bloque la hanche éloignée. Sans espace, pas d'escape.",
    steps: [
      'Passe un bras en crossface contre la joue/épaule de l\'adversaire pour orienter sa tête.',
      'Glisse l\'autre bras en sous-crochet sous son aisselle éloignée.',
      'Hanches basses et écartées, poids relâché poitrine contre poitrine.',
      'Garde les genoux mobiles pour suivre ses tentatives de fuite de hanche.',
      'Pèse vers sa tête pour neutraliser les shrimps.',
    ],
    keyDetails: [
      'Crossface + sous-crochet enferment la tête et la hanche : les deux moteurs de l\'escape.',
      'Poids relâché (lourd) plutôt que muscles tendus.',
    ],
    commonMistakes: [
      'S\'agenouiller collé contre l\'adversaire → il shrimpe dans l\'espace.',
      'Oublier le crossface → la tête tourne et l\'escape s\'ouvre.',
    ],
  },
  {
    id: 'mount-consolidation',
    name: 'Consolider la monte',
    aka: 'Grapevines & high mount',
    belt: 'brown',
    category: 'control',
    position: 'Monte (dessus)',
    summary: 'Stabiliser la monte pour qu\'elle devienne incontournable avant d\'attaquer.',
    concept:
      "Une monte qui tient, c'est une monte basse et connectée, puis haute pour attaquer. On stabilise d'abord, on soumet ensuite.",
    steps: [
      'Garde un poids bas, genoux serrés contre ses côtes.',
      'Pose les mains au sol largement (posture) pour résister aux ponts.',
      'Quand il ponte, suis le mouvement (ride) sans poser tout ton poids du côté du pont.',
      'Remonte progressivement en high mount, aisselles bloquées.',
      'Une fois stable, commence à chasser le bras (armbar) ou le col (étranglement).',
    ],
    keyDetails: [
      'Suivre les ponts plutôt que résister en force.',
      'High mount neutralise l\'upa et ouvre les soumissions.',
    ],
    commonMistakes: [
      'S\'asseoir haut et droit trop tôt → upa réussi.',
      'Attaquer avant de stabiliser → on perd la position.',
    ],
  },
  {
    id: 'knee-on-belly-control',
    name: 'Contrôle genou sur le ventre',
    aka: 'Knee on belly',
    belt: 'brown',
    category: 'control',
    position: 'Knee on belly (dessus)',
    summary: 'Position mobile et pesante pour enchaîner contrôle, points et soumissions.',
    concept:
      "Le genou sur le ventre est une position de transition reine : très mobile, elle pèse sur l'adversaire et ouvre soumissions et passages selon ses réactions.",
    steps: [
      'Place ton genou sur son ventre/sternum, pied du même côté actif.',
      'Lève l\'autre jambe en posture haute pour répartir le poids vers le genou.',
      'Contrôle col + ceinture (gi) ou tête + hanche pour le fixer.',
      'Si l\'adversaire pousse le genou, transitionne (monte, armbar, retour side control).',
    ],
    keyDetails: [
      'Posture haute = plus de poids sur le genou.',
      'La position vit de la mobilité : réagir à chaque défense par une transition.',
    ],
    commonMistakes: [
      'Poser le pied du genou trop bas → peu de pression.',
      'Rester statique → l\'adversaire reforme sa garde.',
    ],
  },
  {
    id: 'back-take-turtle',
    name: 'Prise de dos depuis la tortue',
    aka: 'Back take from turtle',
    belt: 'brown',
    category: 'control',
    position: 'Tortue (dessus)',
    summary: 'Installer les crochets dans le dos d\'un adversaire en tortue.',
    concept:
      "Quand l'adversaire se met en tortue, le dos est la cible. On insère un premier crochet, on l'amène au sol sur le côté, puis le second crochet verrouille le contrôle.",
    steps: [
      'Place un sous-crochet sous son aisselle et l\'autre main contrôle sa hanche/ceinture.',
      'Insère un premier crochet (talon dans le pli de sa hanche).',
      'Fais-le basculer sur le côté du crochet en tirant l\'épaule.',
      'Une fois sur le côté, insère le second crochet.',
      'Verrouille un seat-belt (un bras sur l\'épaule, un sous l\'aisselle) pour finir le contrôle.',
    ],
    keyDetails: [
      'Le seat-belt empêche l\'adversaire de glisser ses épaules au sol pour s\'échapper.',
      'Toujours faire tomber l\'adversaire du côté où tu as déjà un crochet.',
    ],
    commonMistakes: [
      'Sauter sur le dos sans contrôle du haut → l\'adversaire roule et s\'échappe.',
      'Insérer les crochets avant de contrôler les épaules → escape facile.',
    ],
  },

  // ───────────────────────────── CEINTURE NOIRE — FINITIONS/TAKEDOWNS ──────
  {
    id: 'rear-naked-choke',
    name: 'Étranglement arrière',
    aka: 'Rear naked choke / mata leão',
    belt: 'black',
    category: 'submissions',
    position: 'Back control (dessus)',
    summary: 'La finition reine depuis le dos, sans dépendre du kimono.',
    concept:
      "Depuis un contrôle du dos solide, l'étranglement arrière comprime les deux carotides avec l'avant-bras et le biceps : c'est la soumission la plus fiable du BJJ.",
    steps: [
      'Contrôle du dos établi : deux crochets et seat-belt.',
      'Fais glisser le bras du dessus sous le menton de l\'adversaire, main vers son épaule opposée.',
      'Place la main de ce bras dans le pli de ton autre coude.',
      'Pose la seconde main derrière sa tête.',
      'Serre en gonflant la poitrine et en rapprochant les coudes ; sa tête s\'incline vers l\'avant.',
    ],
    keyDetails: [
      'L\'avant-bras passe sous le menton, pas sur la trachée : on cherche les carotides.',
      'Contrôle d\'abord, étrangle ensuite : ne lâche jamais le seat-belt pour forcer la prise.',
    ],
    commonMistakes: [
      'Étrangler la trachée (douloureux, peu efficace) au lieu des carotides.',
      'Lâcher le contrôle du dos pour finir → l\'adversaire s\'échappe.',
    ],
  },
  {
    id: 'armbar-from-mount',
    name: 'Clé de bras depuis la monte',
    aka: 'Armbar from mount',
    belt: 'black',
    category: 'submissions',
    position: 'Monte (dessus)',
    summary: 'Isoler un bras et pivoter pour finir la clé depuis le contrôle dominant.',
    concept:
      "Depuis une monte haute stable, quand l'adversaire pousse pour défendre, tu isoles un bras, tu pivotes au-dessus de sa tête et tu finis la clé en sécurité.",
    steps: [
      'Monte haute, aisselles bloquées, adversaire qui pousse sur ta poitrine.',
      'Isole un bras à deux mains et colle-le contre ta poitrine.',
      'Pivote pour amener une jambe par-dessus sa tête.',
      'Assieds-toi près de son épaule en gardant le bras piégé, genoux serrés.',
      'Descends en arrière en levant les hanches pour étendre le coude.',
    ],
    keyDetails: [
      'S\'asseoir près de l\'épaule, pas loin, pour empêcher l\'adversaire de suivre.',
      'Garder les genoux serrés et le poignet contrôlé tout du long.',
    ],
    commonMistakes: [
      'Pivoter trop loin → l\'adversaire dégage le bras ou se relève.',
      'Genoux ouverts → le bras glisse dehors.',
    ],
  },
  {
    id: 'bow-and-arrow-choke',
    name: 'Étranglement arc & flèche',
    aka: 'Bow and arrow choke',
    belt: 'black',
    category: 'submissions',
    position: 'Back control (dessus)',
    summary: 'Étranglement au col extrêmement puissant depuis le dos (gi).',
    concept:
      "Une des soumissions au gi les plus solides : tu tires sur le col d'une main et contrôles la jambe de l'autre, créant une tension d'arc qui ferme l'étranglement.",
    steps: [
      'Depuis le dos, glisse une main profondément dans le col de l\'adversaire (côté pouce dedans).',
      'Bascule l\'adversaire sur le côté du bras qui étrangle.',
      'Saisis son pantalon au genou avec l\'autre main.',
      'Étends ton corps comme un arc : col tiré vers une direction, jambe vers l\'autre.',
      'Serre en rapprochant les deux tractions.',
    ],
    keyDetails: [
      'La prise de col doit être profonde avant de basculer.',
      'La tension vient de l\'extension du corps entier, pas seulement des bras.',
    ],
    commonMistakes: [
      'Prise de col superficielle → pas de pression.',
      'Oublier le contrôle de la jambe → l\'adversaire tourne et défend.',
    ],
  },
  {
    id: 'cross-choke-mount',
    name: 'Étranglement croisé depuis la monte',
    aka: 'Cross collar choke from mount',
    belt: 'black',
    category: 'submissions',
    position: 'Monte (dessus)',
    summary: 'Finir au col depuis la position montée dominante.',
    concept:
      "Depuis la monte, l'étranglement croisé profite de la gravité : tu descends ton poids dans les prises de col pour fermer les carotides.",
    steps: [
      'Monte stable, glisse une main profondément dans le col, paume vers le haut.',
      'Insère la deuxième main dans l\'autre col, par-dessus ou par-dessous selon la variante.',
      'Descends ta poitrine vers l\'adversaire pour fermer la distance.',
      'Tire les coudes vers le sol de chaque côté de sa tête.',
      'Serre en rapprochant tes poignets sous ton propre menton.',
    ],
    keyDetails: [
      'Le poids du corps participe à la pression, pas seulement les bras.',
      'Prises profondes : les pouces ou les doigts atteignent derrière la nuque.',
    ],
    commonMistakes: [
      'Rester droit → pas de poids dans l\'étranglement.',
      'Prises trop hautes sur le col → carotides non atteintes.',
    ],
  },
  {
    id: 'americana-side',
    name: 'Americana depuis le side control',
    aka: 'Clé d\'épaule (key lock)',
    belt: 'black',
    category: 'submissions',
    position: 'Side control (dessus)',
    summary: 'Clé d\'épaule en figure-four sur un bras plaqué au sol.',
    concept:
      "Quand l'adversaire laisse un bras plaqué au sol en side control, l'americana le verrouille en figure-four et tord l'épaule vers le haut.",
    steps: [
      'En side control, plaque le poignet de l\'adversaire au sol, bras à 90°.',
      'Glisse ta seconde main sous son bras pour saisir ton propre poignet (figure-four).',
      'Garde son coude proche du sol.',
      'Soulève son coude tout en gardant le poignet au sol, comme pour « peindre » le tapis.',
      'Remonte le bras lentement jusqu\'à la soumission.',
    ],
    keyDetails: [
      'Garder le poignet de l\'adversaire collé au sol pendant qu\'on lève le coude.',
      'Mouvement lent et contrôlé : l\'épaule est fragile.',
    ],
    commonMistakes: [
      'Laisser l\'adversaire coller son bras à sa hanche → prise perdue.',
      'Tirer le poignet au lieu de lever le coude → finition inefficace.',
    ],
  },
  {
    id: 'double-leg',
    name: 'Double jambes',
    aka: 'Double leg takedown',
    belt: 'black',
    category: 'takedowns',
    position: 'Debout',
    summary: 'Projection en attrapant les deux jambes après une pénétration.',
    concept:
      "Le double leg ferme la distance d'un pas pénétrant, place l'épaule contre le ventre de l'adversaire et ramasse les deux jambes pour le mettre au sol et atterrir en contrôle.",
    steps: [
      'Change de niveau (plie les genoux) avant d\'entrer, dos droit.',
      'Pénètre avec un pas profond, genou avant entre ses pieds.',
      'Place ton épaule contre son bas-ventre, mains derrière ses genoux.',
      'Tire les genoux vers toi et avance l\'épaule pour le faire basculer.',
      'Atterris en side control ou en demi-garde dominante.',
    ],
    keyDetails: [
      'Changer de niveau AVANT d\'entrer, pas se pencher en avant.',
      'Tête en position haute/dans son flanc, jamais baissée (risque de guillotine).',
    ],
    commonMistakes: [
      'Se pencher sans plier les jambes → tête baissée, guillotine.',
      'Entrée trop courte → pas de poussée, pas de chute.',
    ],
  },
  {
    id: 'single-leg',
    name: 'Une jambe',
    aka: 'Single leg takedown',
    belt: 'black',
    category: 'takedowns',
    position: 'Debout',
    summary: 'Projeter l\'adversaire en contrôlant une seule jambe.',
    concept:
      "Le single leg saisit une jambe haut et serrée contre la poitrine, puis utilise l'angle et les appuis pour amener l'adversaire au sol.",
    steps: [
      'Change de niveau et pénètre vers une jambe.',
      'Verrouille la jambe contre ta poitrine, ta tête à l\'extérieur de sa hanche.',
      'Reviens debout en gardant la jambe serrée et haute.',
      'Crée un angle : pousse, tire, ou cours en cercle pour le déséquilibrer.',
      'Mets-le au sol (run the pipe, trip ou bump) et avance en contrôle.',
    ],
    keyDetails: [
      'Tête à l\'extérieur protège du guillotine et donne l\'angle.',
      'Garder la jambe haute et serrée pour qu\'il ne la récupère pas.',
    ],
    commonMistakes: [
      'Laisser la jambe descendre → l\'adversaire la dégage (hop out).',
      'Tête à l\'intérieur → guillotine ou retour subi.',
    ],
  },
  {
    id: 'arm-drag-to-back',
    name: 'Arm drag vers le dos',
    aka: 'Arm drag to back take',
    belt: 'black',
    category: 'takedowns',
    position: 'Debout / assis',
    summary: 'Tirer le bras de l\'adversaire en travers pour contourner vers son dos.',
    concept:
      "L'arm drag déséquilibre l'adversaire en tirant son bras en travers de son corps, ouvrant un chemin direct vers son dos, debout comme assis.",
    steps: [
      'Saisis le poignet de l\'adversaire d\'une main.',
      'Avec l\'autre main, agrippe son triceps du même bras.',
      'Tire le bras en diagonale en travers de son corps tout en pivotant.',
      'Avance ton autre main/épaule vers son flanc puis son dos.',
      'Installe un sous-crochet et grimpe vers le contrôle du dos.',
    ],
    keyDetails: [
      'Tirer le bras en diagonale, pas juste vers soi, pour le déséquilibrer.',
      'Enchaîner immédiatement vers le dos avant qu\'il ne se replace.',
    ],
    commonMistakes: [
      'Tirer sans pivoter → l\'adversaire reste face à toi.',
      'Hésiter après le drag → la fenêtre vers le dos se referme.',
    ],
  },
]

export const techniqueById = (id: string) => TECHNIQUES.find((t) => t.id === id)
