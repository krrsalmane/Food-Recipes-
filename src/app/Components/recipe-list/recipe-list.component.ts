import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
  activeFilter: string = 'All';

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      const search = params['search'];
      if (search) {
        this.activeFilter = 'All';
        this.recipeService.searchRecipesByName(search).subscribe(recipes => {
          this.recipes = recipes;
          this.loadFromLocalStorage();
        });
      } else if (category) {
        this.activeFilter = category;
        this.recipeService.getRecipesByCategory(category).subscribe(recipes => {
          this.recipes = recipes;
          this.loadFromLocalStorage();
        });
      } else {
        this.activeFilter = 'All';
        this.recipeService.getAllRecipes().subscribe(recipes => {
          this.recipes = recipes;
          this.loadFromLocalStorage();
        });
      }
    });
  }

  filterRecipes(category: string) {
    this.activeFilter = category;
    if (category === 'All') {
      this.recipeService.getAllRecipes().subscribe(recipes => {
        this.recipes = this.restoreSavedData(recipes);
      });
    } else {
      this.recipeService.getRecipesByCategory(category).subscribe(recipes => {
        this.recipes = this.restoreSavedData(recipes);
      });
    }
  }

  viewRecipe(id: string) {
    this.router.navigate(['/recipe', id]);
  }

  // Update the rating of the recipe when a star is clicked
  rateRecipe(recipe: any, stars: number) {
    recipe.rating = stars;
    this.saveToLocalStorage(recipe.idMeal, recipe);
  }

  saveOpinion(idMeal: string, opinion: string): void {
    const recipe = this.recipes.find(r => r.idMeal === idMeal);
    if (recipe) {
      recipe.opinion = opinion;
      this.saveToLocalStorage(idMeal, recipe);
    }
  }

  saveToLocalStorage(idMeal: string, recipe: any): void {
    const data = {
      rating: recipe.rating || 0,
      opinion: recipe.opinion || ''
    };
    localStorage.setItem(`recipe-${idMeal}`, JSON.stringify(data));
  }

  restoreSavedData(recipes: any[]): any[] {
    return recipes.map(recipe => {
      const saved = localStorage.getItem(`recipe-${recipe.idMeal}`);
      if (saved) {
        const { rating, opinion } = JSON.parse(saved);
        recipe.rating = rating ?? 0;
        recipe.opinion = opinion ?? '';
      } else {
        recipe.rating = 0;
        recipe.opinion = '';
      }
      return recipe;
    });
  }

  loadFromLocalStorage() {
    this.recipes.forEach(recipe => {
      const stored = localStorage.getItem(`recipe-${recipe.idMeal}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        recipe.rating = parsed.rating;
        recipe.opinion = parsed.opinion;
      }
    });
  }
}
