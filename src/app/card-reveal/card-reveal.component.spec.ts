import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRevealComponent } from './card-reveal.component';

describe('CardRevealComponent', () => {
  let component: CardRevealComponent;
  let fixture: ComponentFixture<CardRevealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRevealComponent]
    });
    fixture = TestBed.createComponent(CardRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
