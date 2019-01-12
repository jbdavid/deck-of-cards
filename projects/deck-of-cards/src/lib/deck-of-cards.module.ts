import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { DealtCardsState } from './dealt-cards.state';

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forRoot([DealtCardsState])
  ],
  exports: []
})
export class DeckOfCardsModule { }
