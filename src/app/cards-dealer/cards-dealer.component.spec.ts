import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDealerComponent } from './cards-dealer.component';

describe('CardsDealerComponent', () => {
  let component: CardsDealerComponent;
  let fixture: ComponentFixture<CardsDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
