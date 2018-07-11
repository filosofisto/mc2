import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APasswordComponent } from './a-password.component';

describe('APasswordComponent', () => {
  let component: APasswordComponent;
  let fixture: ComponentFixture<APasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
