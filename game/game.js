var ranks = ['2', '3', '4', '5',
            '6', '7', '8', '9', '10',
            'J', 'Q', 'K', 'A']
var suits = ['Black-Spade', 'Red-Heart',
             'Club-Black', 'Diamond-Red']
class Card {
  constructor (rank, suit) {
    this.rank = rank
    this.suit = suit
  }
  displayCard () {
    document.getElementById('deal').textContent = (this.rank + ' ' + this.suit)
  }
  // displayPreviousCard () {
  //   document.getElementById('openDeck').textContent = (this.rank + ' ' + this.suit)
  // }
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
var previousCard
var score1 = 0
var score2 = 0
// Event listener: Start Game
var body = document.querySelector('body')
body.addEventListener('click', event => {
  var startGame = event.target
  if (startGame.id !== 'directionP1') return
  var dealCard = shuffledDeck.dealDeck()
  dealCard.displayCard()
  currentCard = dealCard
  currentPlayer = '2'
  document.getElementById('instruction').textContent = `Player  ${currentPlayer} please click`
})
// Event listener: Direction Higher
body.addEventListener('click', event => {
  var direction = event.target
  if (direction.id !== 'higherP1') return
  document.getElementById('openDeck').textContent = document.getElementById('deal').textContent
  var dealCard = shuffledDeck.dealDeck()
  dealCard.displayCard()
  previousCard = currentCard
  currentCard = dealCard
  // console.log(currentPlayer)
  if (currentPlayer === '2') {
    if (ranks.indexOf(currentCard.rank) >= ranks.indexOf(previousCard.rank)) {
      score2 = score2 + 1
      document.getElementById('p2').textContent = score2
      currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1'
      document.getElementById('instruction').textContent = `Player  ${currentPlayer} please click`
      // console.log(currentPlayer + ' wins')
    }
  } else if (currentPlayer === '1') {
    if (ranks.indexOf(currentCard.rank) >= ranks.indexOf(previousCard.rank)) {
      score1 = score1 + 1
      document.getElementById('p1').textContent = score1
      currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1'
      document.getElementById('instruction').textContent = `Player  ${currentPlayer} please click`
      // console.log(currentPlayer + ' wins')
    }
  }
  if (ranks.indexOf(currentCard.rank) < ranks.indexOf(previousCard.rank)) {
    currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1'
    document.getElementById('instruction').textContent = `Player  ${currentPlayer} please click`
    console.log(currentPlayer + ' turn')
  }
})
// Event listener: Direction Lower
body.addEventListener('click', event => {
  var direction = event.target
  if (direction.id !== 'lowerP1') return
  document.getElementById('openDeck').textContent = document.getElementById('deal').textContent
  var dealCard = shuffledDeck.dealDeck()
  dealCard.displayCard()
  previousCard = currentCard
  currentCard = dealCard
  // console.log(currentPlayer)
  if (currentPlayer === '2') {
    if (ranks.indexOf(currentCard.rank) <= ranks.indexOf(previousCard.rank)) {
      score2 = score2 + 1
      document.getElementById('p2').textContent = score2
      currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1'
      document.getElementById('instruction').textContent = `Player  ${currentPlayer} please click`
      // console.log(currentPlayer + ' wins')
    }
  } else if (currentPlayer === '1') {
    if (ranks.indexOf(currentCard.rank) <= ranks.indexOf(previousCard.rank)) {
      score1 = score1 + 1
      document.getElementById('p1').textContent = score1
      currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1'
      document.getElementById('instruction').textContent = `Player  ${currentPlayer} please click`
      // console.log(currentPlayer + ' wins')
    }
  }
  if (ranks.indexOf(currentCard.rank) > ranks.indexOf(previousCard.rank)) {
    currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1'
    document.getElementById('instruction').textContent = `Player  ${currentPlayer} please click`
    console.log(currentPlayer + ' turnxxx')
  }
})
