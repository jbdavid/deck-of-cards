import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardsDealerComponent } from './cards-dealer/cards-dealer.component';
import { DeckOfCardsModule } from 'deck-of-cards';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DeckOfCardsModule
      ],
      declarations: [
        AppComponent,
        CardsDealerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'deck-of-cards'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('deck-of-cards');
  });
});
