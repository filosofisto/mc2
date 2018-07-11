import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEmailComponent } from './m-email.component';

describe('MEmailComponent', () => {
  let component: MEmailComponent;
  let fixture: ComponentFixture<MEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
