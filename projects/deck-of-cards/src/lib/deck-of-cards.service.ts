import { Injectable } from '@angular/core';
import { Card } from './model/card';
import { Suit } from './model/suit';
import { FaceValue } from './model/face-value';

@Injectable({
  providedIn: 'root'
})
export class DeckOfCardsService {

  static readonly initialDeck: Array<Card> = [
    {suit: Suit.DIAMONDS, faceValue: FaceValue.ACE},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.TWO},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.THREE},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.FOUR},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.FIVE},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.SIX},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.SEVEN},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.EIGHT},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.NINE},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.TEN},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.JACK},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.QUEEN},
    {suit: Suit.DIAMONDS, faceValue: FaceValue.KING},
    {suit: Suit.CLUBS, faceValue: FaceValue.ACE},
    {suit: Suit.CLUBS, faceValue: FaceValue.TWO},
    {suit: Suit.CLUBS, faceValue: FaceValue.THREE},
    {suit: Suit.CLUBS, faceValue: FaceValue.FOUR},
    {suit: Suit.CLUBS, faceValue: FaceValue.FIVE},
    {suit: Suit.CLUBS, faceValue: FaceValue.SIX},
    {suit: Suit.CLUBS, faceValue: FaceValue.SEVEN},
    {suit: Suit.CLUBS, faceValue: FaceValue.EIGHT},
    {suit: Suit.CLUBS, faceValue: FaceValue.NINE},
    {suit: Suit.CLUBS, faceValue: FaceValue.TEN},
    {suit: Suit.CLUBS, faceValue: FaceValue.JACK},
    {suit: Suit.CLUBS, faceValue: FaceValue.QUEEN},
    {suit: Suit.CLUBS, faceValue: FaceValue.KING},
    {suit: Suit.HEARTS, faceValue: FaceValue.ACE},
    {suit: Suit.HEARTS, faceValue: FaceValue.TWO},
    {suit: Suit.HEARTS, faceValue: FaceValue.THREE},
    {suit: Suit.HEARTS, faceValue: FaceValue.FOUR},
    {suit: Suit.HEARTS, faceValue: FaceValue.FIVE},
    {suit: Suit.HEARTS, faceValue: FaceValue.SIX},
    {suit: Suit.HEARTS, faceValue: FaceValue.SEVEN},
    {suit: Suit.HEARTS, faceValue: FaceValue.EIGHT},
    {suit: Suit.HEARTS, faceValue: FaceValue.NINE},
    {suit: Suit.HEARTS, faceValue: FaceValue.TEN},
    {suit: Suit.HEARTS, faceValue: FaceValue.JACK},
    {suit: Suit.HEARTS, faceValue: FaceValue.QUEEN},
    {suit: Suit.HEARTS, faceValue: FaceValue.KING},
    {suit: Suit.SPADES, faceValue: FaceValue.ACE},
    {suit: Suit.SPADES, faceValue: FaceValue.TWO},
    {suit: Suit.SPADES, faceValue: FaceValue.THREE},
    {suit: Suit.SPADES, faceValue: FaceValue.FOUR},
    {suit: Suit.SPADES, faceValue: FaceValue.FIVE},
    {suit: Suit.SPADES, faceValue: FaceValue.SIX},
    {suit: Suit.SPADES, faceValue: FaceValue.SEVEN},
    {suit: Suit.SPADES, faceValue: FaceValue.EIGHT},
    {suit: Suit.SPADES, faceValue: FaceValue.NINE},
    {suit: Suit.SPADES, faceValue: FaceValue.TEN},
    {suit: Suit.SPADES, faceValue: FaceValue.JACK},
    {suit: Suit.SPADES, faceValue: FaceValue.QUEEN},
    {suit: Suit.SPADES, faceValue: FaceValue.KING},
  ];

  deck: Array<Card> = [...DeckOfCardsService.initialDeck];

  constructor() { }

  // Shuffle Durstenfeld
  // see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  public shuffle(): void {
    this.deck = [...DeckOfCardsService.initialDeck];

    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  public dealOneCard(): Card {
    return this.deck.pop();
  }
}
