import { Component } from '@angular/core';


@Component({
  selector: 'app-search',
  imports: [],
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
