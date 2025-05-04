import { Routes } from '@angular/router';
import { HomeComponent } from '../app/Components/home/home.component';
import { RecipeListComponent } from '../app/Components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../app/Components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: '**', redirectTo: '' }
];