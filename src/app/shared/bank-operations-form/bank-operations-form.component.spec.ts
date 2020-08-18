import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOperationsFormComponent } from './bank-operations-form.component';

describe('BankOperationsFormComponent', () => {
  let component: BankOperationsFormComponent;
  let fixture: ComponentFixture<BankOperationsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankOperationsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOperationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
