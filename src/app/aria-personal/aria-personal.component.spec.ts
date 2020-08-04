import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaPersonalComponent } from './aria-personal.component';

describe('AriaPersonalComponent', () => {
  let component: AriaPersonalComponent;
  let fixture: ComponentFixture<AriaPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriaPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
