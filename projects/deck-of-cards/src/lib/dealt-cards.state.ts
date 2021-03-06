import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { Card } from './model/card';
import { DeckOfCardsService } from './deck-of-cards.service';
import { Injectable } from '@angular/core';
import { DealOneCardAction, ShuffleAction } from './deck-of-cards.actions';

@Injectable()
@State<Array<Card>>({
  name: 'dealtCards',
  defaults: []
})
export class DealtCardsState implements NgxsOnInit {

  constructor(private deckOfCardsService: DeckOfCardsService) {}

  ngxsOnInit({setState}: StateContext<any>): void | any {
    setState([]);
  }

  @Action(ShuffleAction)
  shuffleAction({setState}: StateContext<Array<Card>>, {}: ShuffleAction) {
    this.deckOfCardsService.shuffle();
    return setState([]);
  }

  @Action(DealOneCardAction)
  dealOneCardAction({setState, getState}: StateContext<Array<Card>>, {}: DealOneCardAction) {
    const newCard = this.deckOfCardsService.dealOneCard();
    if (newCard != null) {
      return setState([...getState(), newCard]);
    }
  }
}
