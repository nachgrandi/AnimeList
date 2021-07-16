import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPromotionComponent } from './img-promotion.component';

describe('ImgPromotionComponent', () => {
  let component: ImgPromotionComponent;
  let fixture: ComponentFixture<ImgPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
