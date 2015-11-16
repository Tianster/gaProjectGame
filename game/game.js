var ranks = ['A', '2', '3', '4', '5',
            '6', '7', '8', '9', '10',
            'J', 'Q', 'K']
var suits = ['Black-Spade', 'Red-Heart',
             'Club-Black', 'Diamond-Red'] // Create the 52 deck of Cards
class Card {
  constructor (rank, suit) {
    this.rank = rank
    this.suit = suit
  }
  displayCard () {
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
  shuffleDeck () {
    for (var j = 0; j < 10; j++) { // loop this shuffle 10 times
      for (var i = 0; i < this.cards.length; i++) {
        var randomNum = Math.floor(Math.random() * 52)
        var temp = this.cards[i] // i respresent index of our array.
        this.cards[i] = this.cards[randomNum]
        this.cards[randomNum] = temp
      }
    }
  }
  dealDeck () {
    if (this.cards.length > 0) {
      return this.cards.shift() // Shift is array helper method
    } else return null
  }
}
var shuffledDeck = new Deck()
shuffledDeck.shuffleDeck()

// myCard.displayCard()
var body = document.querySelector('body')
body.addEventListener('click', function(event){
var myCard = shuffledDeck.dealDeck()
  myCard.displayCard()
})
