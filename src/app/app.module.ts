import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeckOfCardsModule } from 'deck-of-cards';
import { CardsDealerComponent } from './cards-dealer/cards-dealer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsDealerComponent
  ],
  imports: [
    BrowserModule,
    DeckOfCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
