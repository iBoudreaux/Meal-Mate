import { Component } from '@angular/core';
import { MealCardListComponent } from '../meal-card-list/meal-card-list.component';
import { FoodCardListComponent } from '../food-card-list/food-card-list.component';

@Component({
  selector: 'app-search',
  imports: [FoodCardListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchParam: string = '';

  onInputChange(event: Event) {
    this.searchParam = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    console.log('User input:', this.searchParam);
    // call service
  }

}
