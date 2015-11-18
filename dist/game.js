(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var suits = ['Black-Spade', 'Red-Heart', 'Club-Black', 'Diamond-Red'];

var Card = (function () {
  function Card(rank, suit) {
    _classCallCheck(this, Card);

    this.rank = rank;
    this.suit = suit;
  }

  _createClass(Card, [{
    key: 'displayCard',
    value: function displayCard() {
      document.getElementById('deal').textContent = this.rank + ' ' + this.suit;
    }
    // displayPreviousCard () {
    //   document.getElementById('openDeck').textContent = (this.rank + ' ' + this.suit)
    // }

  }]);

  return Card;
})();

var Deck = (function () {
  function Deck() {
    var _this = this;

    _classCallCheck(this, Deck);

    this.cards = [];
    suits.forEach(function (suit) {
      ranks.forEach(function (rank) {
        var card = new Card(rank, suit);
        _this.cards.push(card);
      });
    });
  }

  _createClass(Deck, [{
    key: 'displayDeck',
    value: function displayDeck() {
      // this is a method
      this.cards.forEach(function (card) {
        card.displayCard();
      });
    }
  }, {
    key: 'shuffleDeck',
    value: function shuffleDeck() {
      // this is a method
      for (var j = 0; j < 10; j++) {
        // loop this shuffle 10 times
        for (var i = 0; i < this.cards.length; i++) {
          var randomNum = Math.floor(Math.random() * 52);
          var temp = this.cards[i]; // i represent index of our array.
          this.cards[i] = this.cards[randomNum];
          this.cards[randomNum] = temp;
        }
      }
    }
  }, {
    key: 'dealDeck',
    value: function dealDeck() {
      // this is a method
      if (this.cards.length > 0) {
        return this.cards.shift(); // Shift is array helper method
      } else return null;
    }
  }]);

  return Deck;
})();

var shuffledDeck = new Deck();
shuffledDeck.shuffleDeck();
var currentCard;
var currentPlayer = '1';
var previousCard;
var score1 = 0;
var score2 = 0;
// Event listener: Start Game
var body = document.querySelector('body');
function start(event) {
  var startGame = event.target;
  if (startGame.id !== 'directionP1') return;
  var dealCard = shuffledDeck.dealDeck();
  dealCard.displayCard();
  currentCard = dealCard;
  currentPlayer = '2';
  document.getElementById('instruction').textContent = 'Player  ' + currentPlayer + ' please click';
  body.removeEventListener('click', start);
}
body.addEventListener('click', start);

// Event listener: Direction Higher
body.addEventListener('click', function (event) {
  var direction = event.target;
  if (direction.id !== 'higherP1') return;
  document.getElementById('openDeck').textContent = document.getElementById('deal').textContent;
  var dealCard = shuffledDeck.dealDeck();
  dealCard.displayCard();
  previousCard = currentCard;
  currentCard = dealCard;
  // console.log(currentPlayer)
  if (currentPlayer === '2') {
    if (ranks.indexOf(currentCard.rank) >= ranks.indexOf(previousCard.rank)) {
      score2 = score2 + 1;
      document.getElementById('p2').textContent = score2;
      currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1';
      document.getElementById('instruction').textContent = 'Player  ' + currentPlayer + ' please click';
      // console.log(currentPlayer + ' wins')
    }
  } else if (currentPlayer === '1') {
      if (ranks.indexOf(currentCard.rank) >= ranks.indexOf(previousCard.rank)) {
        score1 = score1 + 1;
        document.getElementById('p1').textContent = score1;
        currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1';
        document.getElementById('instruction').textContent = 'Player  ' + currentPlayer + ' please click';
        // console.log(currentPlayer + ' wins')
      }
    }
  if (ranks.indexOf(currentCard.rank) < ranks.indexOf(previousCard.rank)) {
    currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1';
    document.getElementById('instruction').textContent = 'Player  ' + currentPlayer + ' please click';
    console.log(currentPlayer + ' turn');
  }
});
// Event listener: Direction Lower
body.addEventListener('click', function (event) {
  var direction = event.target;
  if (direction.id !== 'lowerP1') return;
  document.getElementById('openDeck').textContent = document.getElementById('deal').textContent;
  var dealCard = shuffledDeck.dealDeck();
  dealCard.displayCard();
  previousCard = currentCard;
  currentCard = dealCard;
  // console.log(currentPlayer)
  if (currentPlayer === '2') {
    if (ranks.indexOf(currentCard.rank) <= ranks.indexOf(previousCard.rank)) {
      score2 = score2 + 1;
      document.getElementById('p2').textContent = score2;
      currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1';
      document.getElementById('instruction').textContent = 'Player  ' + currentPlayer + ' please click';
      // console.log(currentPlayer + ' wins')
    }
  } else if (currentPlayer === '1') {
      if (ranks.indexOf(currentCard.rank) <= ranks.indexOf(previousCard.rank)) {
        score1 = score1 + 1;
        document.getElementById('p1').textContent = score1;
        currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1';
        document.getElementById('instruction').textContent = 'Player  ' + currentPlayer + ' please click';
        // console.log(currentPlayer + ' wins')
      }
    }
  if (ranks.indexOf(currentCard.rank) > ranks.indexOf(previousCard.rank)) {
    currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1';
    document.getElementById('instruction').textContent = 'Player  ' + currentPlayer + ' please click';
    console.log(currentPlayer + ' turnxxx');
  }
});

},{}]},{},[1]);
