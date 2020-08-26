import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loading02Component } from './loading02.component';

describe('Loading02Component', () => {
  let component: Loading02Component;
  let fixture: ComponentFixture<Loading02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loading02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
