import { Routes } from '@angular/router';
import { PeliculasComponent } from '../components/peliculas/pelicula.component'

export const routes: Routes = [
    {
        path: '',
        component: PeliculasComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];  
