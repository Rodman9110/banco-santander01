import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOperationsComponent } from './bank-operations.component';

describe('BankOperationsComponent', () => {
  let component: BankOperationsComponent;
  let fixture: ComponentFixture<BankOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
