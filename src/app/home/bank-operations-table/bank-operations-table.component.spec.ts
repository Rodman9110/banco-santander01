import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOperationsTableComponent } from './bank-operations-table.component';

describe('BankOperationsTableComponent', () => {
  let component: BankOperationsTableComponent;
  let fixture: ComponentFixture<BankOperationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankOperationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOperationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
