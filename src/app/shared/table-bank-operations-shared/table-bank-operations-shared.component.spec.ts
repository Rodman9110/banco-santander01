import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBankOperationsSharedComponent } from './table-bank-operations-shared.component';

describe('TableBankOperationsSharedComponent', () => {
  let component: TableBankOperationsSharedComponent;
  let fixture: ComponentFixture<TableBankOperationsSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBankOperationsSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBankOperationsSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
