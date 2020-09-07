import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsFormSharedComponent } from './contacts-form-shared.component';

describe('ContactsFormSharedComponent', () => {
  let component: ContactsFormSharedComponent;
  let fixture: ComponentFixture<ContactsFormSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsFormSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFormSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
