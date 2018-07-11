import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATimeComponent } from './a-time.component';

describe('ATimeComponent', () => {
  let component: ATimeComponent;
  let fixture: ComponentFixture<ATimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
