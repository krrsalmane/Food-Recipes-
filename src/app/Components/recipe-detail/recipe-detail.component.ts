import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../Services/recipe.service';
import { RatingSystemComponent } from '../rating-system/rating-system.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, RatingSystemComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {
  recipe: any = null;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id).subscribe(recipe => {
        this.recipe = recipe;
      });
    }
  }

  getIngredients(): string[] {
    if (!this.recipe) return [];
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.recipe[`strIngredient${i}`];
      const measure = this.recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure ? measure + ' ' : ''}${ingredient}`);
      }
    }
    return ingredients;
  }
}