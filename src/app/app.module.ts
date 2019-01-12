import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeckOfCardsManagerModule } from 'deck-of-cards-manager';
import { CardsDealerComponent } from './cards-dealer/cards-dealer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsDealerComponent
  ],
  imports: [
    BrowserModule,
    DeckOfCardsManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
