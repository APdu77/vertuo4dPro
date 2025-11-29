import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDialogComponent } from './legal-dialog.component';

describe('LegalDialogComponent', () => {
  let component: LegalDialogComponent;
  let fixture: ComponentFixture<LegalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalDialogComponent]
    });
    fixture = TestBed.createComponent(LegalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
