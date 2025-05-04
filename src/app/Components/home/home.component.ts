import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RecipeService]
})
export class HomeComponent implements OnInit {
  trendingRecipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getTrendingRecipes().subscribe(recipes => {
      this.trendingRecipes = recipes;
    });
  }
}