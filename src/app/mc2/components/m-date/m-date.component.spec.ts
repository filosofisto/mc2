import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDateComponent } from './m-date.component';

describe('MDateComponent', () => {
  let component: MDateComponent;
  let fixture: ComponentFixture<MDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
