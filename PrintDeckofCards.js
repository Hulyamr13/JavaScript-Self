let deckOfCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let card = gets();
let index = 0;
do {
    let face = deckOfCards[index];
    print(face + ' of spades, ' + face + ' of clubs, ' + face + ' of hearts, ' + face + ' of diamonds');
} while (deckOfCards[index++] !== card);