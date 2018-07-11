import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACalendarComponent } from './a-calendar.component';

describe('ACalendarComponent', () => {
  let component: ACalendarComponent;
  let fixture: ComponentFixture<ACalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
