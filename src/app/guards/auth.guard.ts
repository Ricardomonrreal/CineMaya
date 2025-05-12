import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Crearás este servicio

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    // Redirige al login y guarda la URL intentada
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};