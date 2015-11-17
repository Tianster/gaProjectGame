(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var suits = ['Black-Spade', 'Red-Heart', 'Club-Black', 'Diamond-Red']; // Create the 52 deck of Cards

var Card = (function () {
  function Card(rank, suit) {
    _classCallCheck(this, Card);

    this.rank = rank;
    this.suit = suit;
  }

  _createClass(Card, [{
    key: 'displayCard',
    value: function displayCard() {
      document.getElementById('openDeck').textContent = this.rank + ' ' + this.suit;
    }
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
// myCard.displayCard()
var body = document.querySelector('body');
body.addEventListener('click', function (event) {
  var openDeck = event.target;
  if (openDeck.id !== 'openDeck') return;
  var myCard = shuffledDeck.dealDeck();
  myCard.displayCard();
});

},{}]},{},[1]);
