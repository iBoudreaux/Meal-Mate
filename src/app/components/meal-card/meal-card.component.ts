import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  imports: [],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss'
})
export class MealCardComponent {
  @Input() meal: any; //this makes the meal property a data property that can be assigned by whoever renders this component.
  // so, when meal list calls this and sends the api data to it, it'll assign it and display the data
}
