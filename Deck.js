import Card from './Card.js';
import shuffle from './node_modules/lodash-es/shuffle.js';


class Deck {

    #cards = [];

    constructor(options) {
        this.values = options.values;
        this.suits = options.suits;
    }

    createFullDeck(){
        this.suits.forEach((suits) => {
            this.values.forEach((value) => {
                this.#cards.push(new Card(value, suits));
            });
        });
        return this;
    }

    displayCard(){
        this.#cards.forEach((Card) => {
            Card.display();
        });
        return this;
    }

    shuffleDeck(){
        this.#cards = shuffle(this.#cards);
        return this;
    }
}

export default Deck;