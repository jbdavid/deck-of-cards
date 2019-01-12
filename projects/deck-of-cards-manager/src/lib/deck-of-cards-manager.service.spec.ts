import { TestBed } from '@angular/core/testing';

import { DeckOfCardsManagerService } from './deck-of-cards-manager.service';

describe('DeckOfCardsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeckOfCardsManagerService = TestBed.get(DeckOfCardsManagerService);
    expect(service).toBeTruthy();
  });
});
