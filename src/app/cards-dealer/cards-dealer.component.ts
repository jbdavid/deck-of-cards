import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Card, DealOneCardAction, ShuffleAction } from 'deck-of-cards';

@Component({
  selector: 'app-cards-dealer',
  templateUrl: './cards-dealer.component.html',
  styleUrls: ['./cards-dealer.component.scss']
})
export class CardsDealerComponent implements OnInit {

  @Select(state => state.dealtCards)
  dealtCards$: Observable<Array<Card>>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  shuffle() {
    this.store.dispatch(new ShuffleAction());
  }

  dealOneCard() {
    this.store.dispatch(new DealOneCardAction());
  }

}
