import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADateComponent } from './a-date.component';

describe('ADateComponent', () => {
  let component: ADateComponent;
  let fixture: ComponentFixture<ADateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
