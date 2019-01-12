import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { Card } from './model/card';
import { DeckOfCardsManagerService } from './deck-of-cards-manager.service';
import { Injectable } from '@angular/core';
import { DealOneCardAction, ShuffleAction } from './deck-of-cards-manager.actions';

@Injectable()
@State<Array<Card>>({
  name: 'dealtCards',
  defaults: []
})
export class DealtCardsState implements NgxsOnInit {

  constructor(private deckOfCardsManagerService: DeckOfCardsManagerService){}

  ngxsOnInit({setState}: StateContext<any>): void | any {
    setState([]);
    console.log('State initialized, shuffle up and deal !');
  }

  @Action(ShuffleAction)
  shuffleAction({setState}: StateContext<Array<Card>>, {}: ShuffleAction) {
    this.deckOfCardsManagerService.shuffle();
    return setState([]);
  }

  @Action(DealOneCardAction)
  dealOneCardAction({setState, getState}: StateContext<Array<Card>>, {}: DealOneCardAction) {
    const newCard = this.deckOfCardsManagerService.dealOneCard();
    if (newCard != null) {
      return setState([...getState(), newCard]);
    }
  }
}
