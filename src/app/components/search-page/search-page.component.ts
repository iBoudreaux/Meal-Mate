import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FoodCardListComponent } from '../food-card-list/food-card-list.component';

@Component({
  selector: 'app-search-page',
  imports: [SearchComponent, FoodCardListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  searchTerm: string = '';

  protected onSearch(newSearchTerm: string) {
    this.searchTerm = newSearchTerm;
  }
}
