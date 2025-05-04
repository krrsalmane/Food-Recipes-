import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
  activeFilter: string = 'All';

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      const search = params['search'];
      if (search) {
        this.activeFilter = 'All';
        this.recipeService.searchRecipesByName(search).subscribe(recipes => {
          this.recipes = recipes;
        });
      } else if (category) {
        this.activeFilter = category;
        this.recipeService.getRecipesByCategory(category).subscribe(recipes => {
          this.recipes = recipes;
        });
      } else {
        this.activeFilter = 'All';
        this.recipeService.getAllRecipes().subscribe(recipes => {
          this.recipes = recipes;
        });
      }
    });
  }

  filterRecipes(category: string) {
    this.activeFilter = category;
    if (category === 'All') {
      this.recipeService.getAllRecipes().subscribe(recipes => {
        this.recipes = recipes;
      });
    } else {
      this.recipeService.getRecipesByCategory(category).subscribe(recipes => {
        this.recipes = recipes;
      });
    }
  }
}