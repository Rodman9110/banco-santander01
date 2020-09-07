import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListSharedComponent } from './contacts-list-shared.component';

describe('ContactsListSharedComponent', () => {
  let component: ContactsListSharedComponent;
  let fixture: ComponentFixture<ContactsListSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsListSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
