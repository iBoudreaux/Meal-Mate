import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.foodapi.getFoodItem().subscribe((response) => {
      this.food = response.results;
      console.log(this.food)
    })
  }

  food: any[] = [];
}
