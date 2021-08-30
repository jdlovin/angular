import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InNoutComponent } from './in-nout.component';

describe('InNoutComponent', () => {
  let component: InNoutComponent;
  let fixture: ComponentFixture<InNoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InNoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InNoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
