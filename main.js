document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const movesDisplay = document.getElementById('moves');
    const timerDisplay = document.getElementById('timer');
    const restartButton = document.getElementById('restart');

    const symbols = ['🐸', '🦋', '🦀', '🌼', '🌸', '🦧'];  
    let cards = [...symbols, ...symbols];  
    let flippedCards = [];  
    let moves = 0;  
    let matchPairs = 0;  
    let isChecking = false;  
    let timer = 0;  
    let intervalId;  

    // Mélange aléatoire des cartes
    function shuffleCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  
        }
    }

    // Crée une carte HTML avec un symbole spécifique et ajoute l'événement de clic
    function createCard(symbol) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.addEventListener('click', flipCard);
        return card;
    }

    // Gère le retournement des cartes et la mise à jour des coups
    function flipCard(e) {
        const card = e.target;
        if (isChecking || flippedCards.length >= 2 || card.classList.contains('flipped')) return;

        card.classList.add('flipped');
        card.textContent = card.dataset.symbol;
        flippedCards.push(card);
        moves++;
        movesDisplay.textContent = moves;

        if (flippedCards.length === 2) {
            isChecking = true;
            checkForMatch();
            setTimeout(() => isChecking = false, 1000); 
        }
    }

    // Vérifie si les deux cartes retournées forment une paire
    function checkForMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.symbol === card2.dataset.symbol) {
            matchPairs++;  
            card1.classList.add('paire-trouvee');
            card2.classList.add('paire-trouvee');
            flippedCards = [];  
            if (matchPairs === cards.length / 2) {
                setTimeout(() => {
                    alert(`Félicitations ! Vous avez gagné en ${moves} coups et ${timer} secondes`);
                    clearInterval(intervalId); 
                }, 300);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.textContent = '';
                card2.textContent = '';
                flippedCards = [];
            }, 1000);
        }
    }

    // Initialisation du jeu (réinitialisation des cartes, des coups et du chronomètre)
    function initializeGame() {
        gameBoard.innerHTML = '';
        moves = 0;
        matchPairs = 0;
        flippedCards = [];
        movesDisplay.textContent = moves;
        timer = 0;
        timerDisplay.textContent = timer;
        shuffleCards(cards);
        cards.forEach(symbol => {
            const card = createCard(symbol);
            gameBoard.appendChild(card);
        });
        startTimer();  
    }

    // Démarre le chronomètre du jeu
    function startTimer() {
        intervalId = setInterval(() => {
            timer++;
            timerDisplay.textContent = timer;
        }, 1000);
    }

    // Réinitialise le jeu lors d'un clic sur le bouton "Recommencer"
    restartButton.addEventListener('click', () => {
        clearInterval(intervalId); 
        initializeGame();
    });

    // Lance le jeu dès le chargement de la page
    initializeGame();
});
