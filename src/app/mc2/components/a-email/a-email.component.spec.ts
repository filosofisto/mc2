import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AEmailComponent } from './a-email.component';

describe('AEmailComponent', () => {
  let component: AEmailComponent;
  let fixture: ComponentFixture<AEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
