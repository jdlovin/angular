import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWhatComponent } from './for-what.component';

describe('ForWhatComponent', () => {
  let component: ForWhatComponent;
  let fixture: ComponentFixture<ForWhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForWhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
