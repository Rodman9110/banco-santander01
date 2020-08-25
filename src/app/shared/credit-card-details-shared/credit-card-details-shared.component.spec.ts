import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardDetailsSharedComponent } from './credit-card-details-shared.component';

describe('CreditCardDetailsSharedComponent', () => {
  let component: CreditCardDetailsSharedComponent;
  let fixture: ComponentFixture<CreditCardDetailsSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardDetailsSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardDetailsSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
