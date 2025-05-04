import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rating-system',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-system.component.html',
  styleUrls: ['./rating-system.component.css']
})
export class RatingSystemComponent implements OnInit {
  @Input() recipeId: string = '';
  userRating: number | null = null;

  ngOnInit() {
    this.getRating().subscribe(rating => {
      this.userRating = rating;
    });
  }

  setRating(rating: number): Observable<any> {
    try {
      if (rating < 1 || rating > 5) {
        console.error('Rating must be between 1 and 5');
        return of(null);
      }
      localStorage.setItem(`rating_${this.recipeId}`, rating.toString());
      this.userRating = rating;
      return of({ recipeId: this.recipeId, rating });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error saving rating:', errorMessage);
      return of(null);
    }
  }

  getRating(): Observable<any> {
    try {
      const rating = localStorage.getItem(`rating_${this.recipeId}`);
      return of(rating ? parseInt(rating) : null);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error fetching rating:', errorMessage);
      return of(null);
    }
  }
}