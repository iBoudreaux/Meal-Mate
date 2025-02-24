import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCardListComponent } from './food-card-list.component';

describe('FoodCardListComponent', () => {
  let component: FoodCardListComponent;
  let fixture: ComponentFixture<FoodCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
