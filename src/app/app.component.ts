import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-haven';
}