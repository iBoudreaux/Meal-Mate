import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {
  //need the provider in the app.config 
  constructor(private client: HttpClient) { }
    private apiKey = CONFIG.spoonacularApiKey;
    private baseFoodURL = 'https://api.spoonacular.com/food/ingredients/search';
    private baseRecipeURL = '';

  //i think what i want to do is have two different resource calls.
  //One for food so a user can just pick food and add it to a meal
  // Two one for recipes so theycna searc amonsgt recipes and just add it to a day
  

  getMeals(): Observable<any> {
    return this.client.get<any>(""); //enter the api call here
  }

  getFoodItem(): Observable<any> {
    return this.client.get<any>(`${this.baseFoodURL}/?query=apple&number=5&metaInformation=true&apiKey=${this.apiKey}`);
  }
}
