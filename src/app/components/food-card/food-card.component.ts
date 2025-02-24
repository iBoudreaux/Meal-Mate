import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-card',
  imports: [],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {
  @Input() foodItem: any;

handleImageError(event: any) {
  console.error('Image failed to load:', event.target.src);
  event.target.src = 'assets/placeholder-image.png'; // Path to a default placeholder image
}
}
