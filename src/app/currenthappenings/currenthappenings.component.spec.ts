import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenthappeningsComponent } from './currenthappenings.component';

describe('CurrenthappeningsComponent', () => {
  let component: CurrenthappeningsComponent;
  let fixture: ComponentFixture<CurrenthappeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenthappeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenthappeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
