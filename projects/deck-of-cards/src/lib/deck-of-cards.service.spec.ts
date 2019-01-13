import { DeckOfCardsService } from './deck-of-cards.service';
import { Card } from './model/card';
import {Suit} from './model/suit';
import {FaceValue} from './model/face-value';

describe('DeckOfCardsService', () => {

  let service: DeckOfCardsService;
  beforeEach(() => { service = new DeckOfCardsService(); });

  it('should init the deck', () => {
    expect(service.deck.length).toEqual(52);
    expect(service.deck).toEqual(DeckOfCardsService.initialDeck);
  });

  it('should shuffle the deck', () => {
    // Depending on the type of company we're working for, testing the shuffle could be a simple test or a major part of our code
    // For example : for an online poker playing company, randomness testing could be done with statistic measures
    // Here, I'm just testing that the deck isn't equal to the initial state anymore (1 chance of test failure in 52! = 1/8,06x10^67)
    // That part of the tests should be discussed with the team
    service.shuffle();

    expect(service.deck.length).toEqual(52);
    expect(service.deck).not.toEqual(DeckOfCardsService.initialDeck);
  });

  it('should deal one card', () => {
    const dealtCard: Card = service.dealOneCard();

    expect(dealtCard).toEqual({suit: Suit.SPADES, faceValue: FaceValue.KING});
    expect(service.deck.length).toEqual(51);
  });

  it('should deal 52 cards max', () => {
    for (let i = 0; i < 52; i++) {
      service.dealOneCard();
    }

    expect(service.deck.length).toEqual(0);

    const dealtCard: Card = service.dealOneCard();

    expect(dealtCard).toBeUndefined();
  });
});
