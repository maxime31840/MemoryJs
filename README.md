
### Fichiers principaux

- **index.html** : Le fichier HTML contient la structure du jeu, incluant une grille pour les cartes, un affichage des coups et du chronomètre, ainsi qu'un bouton pour recommencer.
- **style.css** : Le fichier CSS définit l'apparence du jeu, incluant le style des cartes, des boutons, ainsi que des animations pour les retournements de cartes.
- **main.js** : Le fichier JavaScript contient la logique du jeu. Il gère les événements utilisateur (clics sur les cartes), le mélange des cartes, la vérification des paires et la gestion du chronomètre.

## Installation

1. Clonez ou téléchargez ce projet.
2. Ouvrez le fichier `index.html` dans un navigateur web pour commencer à jouer.

## Fonctionnement

### 1. **Mélange des cartes**
Les cartes sont mélangées de manière aléatoire au début de chaque partie. Le mélange est effectué grâce à la fonction `shuffleCards()`.

### 2. **Retourner les cartes**
Lorsqu'une carte est cliquée, elle se retourne et affiche un symbole grâce à la fonction `flipCard()`. Si deux cartes sont retournées, la fonction `checkForMatch()` vérifie si elles correspondent.

### 3. **Vérification des paires**
Si les cartes retournées correspondent, elles restent face visible et sont marquées comme une "paire trouvée". Sinon, elles sont retournées face cachée après 1 seconde.

### 4. **Chronomètre et coups**
Le jeu affiche un chronomètre qui commence dès le premier clic, ainsi qu'un compteur de coups. Chaque paire retournée compte comme un coup.

### 5. **Nouvelle partie**
Le bouton "Recommencer" réinitialise le jeu, mélange les cartes à nouveau et réinitialise le chronomètre et les coups.


