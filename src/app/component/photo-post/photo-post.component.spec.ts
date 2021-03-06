import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPostComponent } from './photo-post.component';

describe('PhotoPostComponent', () => {
  let component: PhotoPostComponent;
  let fixture: ComponentFixture<PhotoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
