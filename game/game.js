// Create the 52 deck of Cards
var ranks = ['A', '2', '3', '4', '5',
            '6', '7', '8', '9', '10',
            'J', 'Q', 'K']
var suits = ['Black-Spade', 'Red-Heart',
             'Club-Black', 'Diamond-Red']
class Card {
  constructor (rank, suit) {
    this.rank = rank
    this.suit = suit
  }
  displayCard() {
    console.log(this.rank + ' ' + this.suit)
  }
}

class Deck {
  constructor () {
    this.cards = []
    suits.forEach(suit => {
      ranks.forEach(rank => {
        var card = new Card(rank, suit)
        this.cards.push(card)
      })
    })
  }
  displayDeck () {
    this.cards.forEach(card => {
      card.displayCard()
    })
  }
}
var cherylDeck = new Deck()
var tiansDeck = new Deck()
tiansDeck.displayDeck()

//var Deck = new Array [] // this array has 52 Cards */

// var cardsInDeck = new Array ()
// var numberOfCardsInDeck = 5
//   cardsInDeck[0] = 'AceHearts';
//   cardsInDeck[1] = 'Clubs2';
//   cardsInDeck[2] = 'ClubAce';
//   cardsInDeck[3] = 'DiamondsKing';
//   cardsInDeck[4] = 'SpadesJack';
//
//   function randomCard () {
//     return Math.floor(Math.random() * numberOfCardsInDeck)
//   }
//   function removeCard (c) {
//     for(j=c; j <= numberOfCardsInDeck -2; j++) {
//       cardsInDeck[j] = cardsInDeck [j + 1]
//     }
//     numberOfCardsInDeck-- ;
//   }
//   function dealCard(i) {
//     if(numberOfCardsInDeck === 0) return false;
//     removeCard(i);
//   }
