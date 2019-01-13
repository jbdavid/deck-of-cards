import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CardsDealerComponent } from './cards-dealer.component';
import { DealOneCardAction, DeckOfCardsModule, ShuffleAction } from 'deck-of-cards';
import {Store} from '@ngxs/store';

describe('CardsDealerComponent', () => {
  let component: CardsDealerComponent;
  let fixture: ComponentFixture<CardsDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DeckOfCardsModule
      ],
      declarations: [ CardsDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch a shuffle action', inject([Store], (store) => {
    spyOn(store, 'dispatch');

    component.shuffle();

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch.calls.mostRecent().args[0] instanceof ShuffleAction).toBeTruthy();
  }));

  it('should dispatch a dealOnCard action', inject([Store], (store) => {
    spyOn(store, 'dispatch');

    component.dealOneCard();

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch.calls.mostRecent().args[0] instanceof DealOneCardAction).toBeTruthy();
  }));
});
