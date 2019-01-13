import {inject, TestBed} from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { DealtCardsState } from './dealt-cards.state';
import { DealOneCardAction, ShuffleAction } from './deck-of-cards.actions';
import { Suit } from './model/suit';
import { FaceValue } from './model/face-value';
import {DeckOfCardsService} from './deck-of-cards.service';

describe('DealtCardsState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([DealtCardsState])],
    }).compileComponents();

    store = TestBed.get(Store);
  });

  it('shoud init an empty dealt cards array', () => {
    store.selectOnce(state => state.dealtCards).subscribe(dealtCards => {
      expect(dealtCards.length).toEqual(0);
    });
  });

  it('should re-init dealt cards array and shuffle the deck', inject([DeckOfCardsService], (deckOfCardsService) => {
    // Given a card has already been dealt
    store.dispatch(new DealOneCardAction());
    spyOn(deckOfCardsService, 'shuffle');

    // When a shuffle action is dispatched
    store.dispatch(new ShuffleAction());

    // Dealt cards array is reinitialized
    store.selectOnce(state => state.dealtCards).subscribe(dealtCards => {
      expect(dealtCards.length).toEqual(0);
    });
    // The deck is randomly shuffled
    expect(deckOfCardsService.shuffle).toHaveBeenCalled();
  }));

  it('should deal one card', inject([DeckOfCardsService], (deckOfCardsService) => {
    spyOn(deckOfCardsService, 'dealOneCard').and.returnValue({suit: Suit.HEARTS, faceValue: FaceValue.EIGHT});

    store.dispatch(new DealOneCardAction());

    store.selectOnce(state => state.dealtCards).subscribe(dealtCards => {
      expect(dealtCards).toEqual([
          {suit: Suit.HEARTS, faceValue: FaceValue.EIGHT}
        ]);
    });
    expect(deckOfCardsService.dealOneCard).toHaveBeenCalled();
  }));
});
