import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPasswordComponent } from './m-password.component';

describe('MPasswordComponent', () => {
  let component: MPasswordComponent;
  let fixture: ComponentFixture<MPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
