import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {  } from '../meal-card/meal-card.component';
import { FoodApiService } from '../../services/food-api.service';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-food-card-list',
  imports: [FoodCardComponent],
  templateUrl: './food-card-list.component.html',
  styleUrl: './food-card-list.component.scss'
})
export class FoodCardListComponent {
  constructor(private foodapi: FoodApiService){}
  @Input() searchTerm: string = '';
  food: any[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchTerm'] && !changes['searchTerm'].firstChange) {
      this.searchAPI();
    }
  }

  // if there is no searchTerm like if the page is intially loaded, call the intial load method
  // which just calls the getFood()  method that assigns the search term tot random if empty and displays random data
  // otherwise, set and use searchTerm to display data to use
  ngOnInit(): void {
    if (this.searchTerm) {
      this.searchAPI();
    } else {
      this.loadInitialData();
    }
  }

  private searchAPI() {
    this.isLoading = true;
    this.error = null;
    this.foodapi.setSearchTerm(this.searchTerm);
    this.foodapi.getFoodItem().subscribe({
      next: (response) => {
        this.food = response.results;
        console.log(this.food);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch food items';
        this.isLoading = false;
        console.log(err);
      }
    });
  }

  private loadInitialData() {
    this.isLoading = true;
    this.error = null;
    this.foodapi.getFoodItem().subscribe({
      next: (response) => {
        this.food = response.results;
        console.log(this.food);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch food items';
        this.isLoading = false;
        console.log(err);
      }
    })
  }

}
