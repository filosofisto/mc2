import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALabelComponent } from './a-label.component';

describe('ALabelComponent', () => {
  let component: ALabelComponent;
  let fixture: ComponentFixture<ALabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
