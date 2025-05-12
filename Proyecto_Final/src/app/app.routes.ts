import { Routes } from '@angular/router';
import { PeliculasComponent } from '../components/peliculas/pelicula.component'
import { BoletosComponent } from '../components/boletos/boletos.component'

export const routes: Routes = [
    {
        path: '',
        component: PeliculasComponent,
    },
    {
        path: 'horario',
        component: BoletosComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];  
