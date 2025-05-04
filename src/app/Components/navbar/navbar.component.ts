import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';

  constructor() {}

  searchRecipes() {
    if (this.searchQuery.trim()) {
      window.location.href = `/recipes?search=${encodeURIComponent(this.searchQuery)}`;
      this.searchQuery = '';
    }
  }
}