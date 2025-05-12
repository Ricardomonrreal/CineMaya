import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    // Verifica si estamos en el navegador
    this.isBrowser = isPlatformBrowser(platformId);
    this.isAuthenticated = this.getInitialAuthState();
  }

  // 🔍 Solo lee localStorage si estamos en el navegador
  private getInitialAuthState(): boolean {
    if (this.isBrowser) {
      return localStorage.getItem('isLoggedIn') === 'true';
    }
    return false;
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      if (this.isBrowser) {
        localStorage.setItem('isLoggedIn', 'true');
      }
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    if (this.isBrowser) {
      localStorage.removeItem('isLoggedIn');
    }
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
