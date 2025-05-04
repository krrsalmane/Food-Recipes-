import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor() { }

  setRating(recipeId: string, rating: number): Observable<any> {
    try {
      if (rating < 1 || rating > 5) {
        console.error('Rating must be between 1 and 5');
        return of(null);
      }
      localStorage.setItem(`rating_${recipeId}`, rating.toString());
      return of({ recipeId, rating });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error saving rating:', errorMessage);
      return of(null);
    }
  }

  getRating(recipeId: string): Observable<any> {
    try {
      const rating = localStorage.getItem(`rating_${recipeId}`);
      return of(rating ? parseInt(rating) : null);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error fetching rating:', errorMessage);
      return of(null);
    }
  }
}