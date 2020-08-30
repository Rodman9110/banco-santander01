import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBankOperationsComponent } from './table-bank-operations.component';

describe('TableBankOperationsComponent', () => {
  let component: TableBankOperationsComponent;
  let fixture: ComponentFixture<TableBankOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBankOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBankOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
