import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationwindowComponent } from './donationwindow.component';

describe('DonationwindowComponent', () => {
  let component: DonationwindowComponent;
  let fixture: ComponentFixture<DonationwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
