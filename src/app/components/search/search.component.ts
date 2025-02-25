import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchTermChange = new EventEmitter<string>();
  searchParam: string = '';

  onInputChange(event: Event) {
    this.searchParam = (event.target as HTMLInputElement).value;
    this.searchTermChange.emit(this.searchParam);
  }

  onSubmit() {
    this.searchTermChange.emit(this.searchParam);
  }

}
