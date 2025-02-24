import { Component, OnInit } from '@angular/core';
import { MealCardComponent } from '../meal-card/meal-card.component';
import { FoodApiService } from '../../services/food-api.service';

@Component({
  selector: 'app-meal-card-list',
  imports: [MealCardComponent],
  templateUrl: './meal-card-list.component.html',
  styleUrl: './meal-card-list.component.scss'
})
export class MealCardListComponent implements OnInit{
  constructor(private foodapi: FoodApiService){} // tells angular that when it calls this it needs to provide a foodapi

  //ngOnInit makes it to where we don't keep calling the api everytime we re-render
  ngOnInit(): void {
    this.foodapi.getFoodItem().subscribe((response) => {
      this.meals = response.results;
      console.log(response.results)
    })
  }

  meals: any;

}
