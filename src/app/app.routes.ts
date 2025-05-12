import { Routes } from '@angular/router';
import { PeliculasComponent } from '../components/peliculas/pelicula.component';
import { BoletosComponent } from '../components/boletos/boletos.component';
import { StatsComponent } from '../components/stats/stats.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'peliculas',
        component: PeliculasComponent,
        canActivate: [authGuard] // Protege esta ruta
    },
    {
        path: 'horario',
        component: BoletosComponent,
        canActivate: [authGuard] // Protege esta ruta
    },
    {
        path: 'stats',
        component: StatsComponent,
        canActivate: [authGuard] // Protege esta ruta
    },
    {
        path: '**',
        redirectTo: 'login', // Redirige a login en vez de películas
    }
];