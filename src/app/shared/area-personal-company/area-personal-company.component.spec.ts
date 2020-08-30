import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPersonalCompanyComponent } from './area-personal-company.component';

describe('AreaPersonalCompanyComponent', () => {
  let component: AreaPersonalCompanyComponent;
  let fixture: ComponentFixture<AreaPersonalCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPersonalCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPersonalCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
