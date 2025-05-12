import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTA ESTO
import { AuthService } from '../services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true, // 👈 ¡no olvides esto!
  imports: [CommonModule, RouterLink, RouterLinkActive], // 👈 AGREGA CommonModule
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public authService: AuthService) {}
logout() {
    this.authService.logout();
  }
}

