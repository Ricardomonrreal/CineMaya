import { Routes } from '@angular/router';
import { PeliculasComponent } from '../components/peliculas/pelicula.component'
import { BoletosComponent } from '../components/boletos/boletos.component'
import { StatsComponent } from '../components/stats/stats.component'

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
        path: 'stats',
        component: StatsComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];  
