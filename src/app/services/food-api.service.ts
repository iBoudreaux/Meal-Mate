import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {
  //need the provider in the app.config 
  constructor(private client: HttpClient) { }
    private apiKey = CONFIG.spoonacularApiKey;
    private searchTerm: string = '';
    private baseFoodURL: string = 'https://api.spoonacular.com/food/ingredients/search';
    private baseRecipeURL: string = '';


  // This will generate a random letter that we use as the default for the default call for the API
  // So, if the searchTerm is empty/null, it will pick a random letter and return a random list of ingredients
  generateRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  
  // This is the method to set the searchTerm to a random letter if empty or whatever the user asks for
  setSearchTerm(newTerm: string): string {
    if (this.searchTerm == '' || null) {
      return this.searchTerm = this.generateRandomLetter();
    } else {
      return this.searchTerm = newTerm;

    }
  }


  getMeals(): Observable<any> {
    return this.client.get<any>(""); //enter the api call here
  }

  //This method calls the API with params for the call
  getFoodItem(): Observable<any> {
    let params = new HttpParams()
      .set('apiKey', this.apiKey)

      // if there is a searchTerm, search and display it, if not call random letter and display that
      .set('query', this.searchTerm || this.setSearchTerm('')) 
      .set('number', '100')
      .set('sortDirection', 'desc')
      .set('metaInformation', 'true');

      return this.client.get<any>(`${this.baseFoodURL}`, {params: params});
  }
}
