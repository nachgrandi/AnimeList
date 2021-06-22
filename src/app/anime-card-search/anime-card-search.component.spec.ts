import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCardSearchComponent } from './anime-card-search.component';

describe('AnimeCardSearchComponent', () => {
  let component: AnimeCardSearchComponent;
  let fixture: ComponentFixture<AnimeCardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeCardSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
