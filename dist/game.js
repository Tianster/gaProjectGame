(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Create the 52 deck of Cards
var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
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
      console.log(this.rank + ' ' + this.suit);
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
      this.cards.forEach(function (card) {
        card.displayCard();
      });
    }
  }]);

  return Deck;
})();

var cherylDeck = new Deck();
var tiansDeck = new Deck();
tiansDeck.displayDeck();

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

},{}]},{},[1]);
