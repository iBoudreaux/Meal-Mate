import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCardListComponent } from './meal-card-list.component';

describe('MealCardListComponent', () => {
  let component: MealCardListComponent;
  let fixture: ComponentFixture<MealCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
