var ranks = ['2', '3', '4', '5',
            '6', '7', '8', '9', '10',
            'J', 'Q', 'K', 'A']
var suits = ['Black-Spade', 'Red-Heart',
             'Club-Black', 'Diamond-Red'] // Create the 52 deck of Cards
class Card {
  constructor (rank, suit) {
    this.rank = rank
    this.suit = suit
  }
  displayCard () {
    document.getElementById('openDeck').textContent = (this.rank + ' ' + this.suit)
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
  displayDeck () {// this is a method
    this.cards.forEach(card => {
      card.displayCard()
    })
  }
  shuffleDeck () {// this is a method
    for (var j = 0; j < 10; j++) { // loop this shuffle 10 times
      for (var i = 0; i < this.cards.length; i++) {
        var randomNum = Math.floor(Math.random() * 52)
        var temp = this.cards[i] // i represent index of our array.
        this.cards[i] = this.cards[randomNum]
        this.cards[randomNum] = temp
      }
    }
  }
  dealDeck () {// this is a method
    if (this.cards.length > 0) {
      return this.cards.shift() // Shift is array helper method
    } else return null
  }
}
var shuffledDeck = new Deck()
shuffledDeck.shuffleDeck()
var currentCard
var currentPlayer = '1'
var previousCard // housing the dealt card
// myCard.displayCard()
// Event listener: Deal
var body = document.querySelector('body')
body.addEventListener('click', event => {
  var deal = event.target
  if (deal.id !== 'deal') return
  var dealCard = shuffledDeck.dealDeck()
  dealCard.displayCard()
  if (currentPlayer === '1') {
    document.getElementById('instruction').textContent = 'Click on Higher or Lower'
  }
  // currentCard = dealCard
})
// Event listener: Direction
body.addEventListener('click', event => {
  var direction = event.target
  if (direction.id !== 'higherP1') return
  var dealCard = shuffledDeck.dealDeck()
  dealCard.displayCard()
  previousCard = currentCard
  currentCard = dealCard
  console.log(currentCard)
  console.log(previousCard)
  console.log(dealCard)
  console.log(ranks.indexOf(currentCard.rank))
  console.log(ranks.indexOf(previousCard.rank))
  if (ranks.indexOf(currentCard.rank) >= ranks.indexOf(previousCard.rank)) {
    console.log('p1 scores')
  } else console.log('p2 turn')
})
  // var dealCard = shuffledDeck.dealDeck()
  // dealCard.displayCard()
