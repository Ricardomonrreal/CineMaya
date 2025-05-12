import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Definimos una interfaz para tipar las películas
interface Pelicula {
  name: string;
  image: string;
  clasificacion: string;
  cines: string[];
  horarios: {
    cine: string;
    sesiones: string[];
  }[];
}

@Component({
  selector: 'app-peliculas',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css' 
})
export class PeliculasComponent {
    peliculas: Pelicula[] = [
    {
      name: 'Thunderbolts',
      image: 'assets/img/image003_929d0db0.jpeg',
      clasificacion: 'B15',
      cines: ['Cinepolis Plaza las Américas', 'Cinepolis Gran Plaza', 'Cinepolis Puerto Cancun'],
      horarios: [
        {
          cine: 'Cinepolis Plaza las Américas',
          sesiones: ['12:30', '15:45', '18:15', '21:00']
        },
        {
          cine: 'Cinepolis Gran Plaza',
          sesiones: ['13:00', '16:30', '19:15', '22:00']
        },
        {
          cine: 'Cinepolis Puerto Cancun',
          sesiones: ['14:20', '17:10', '20:05', '22:50']
        }
      ]
    },
    {
      name: 'Minecraft',
      image: 'assets/img/Minecraft.jpeg',
      clasificacion: 'A',
      cines: ['Cinepolis Cancún Mall', 'Cinepolis Arco Norte', 'Cinepolis Gran Plaza'],
      horarios: [
        {
          cine: 'Cinepolis Cancún Mall',
          sesiones: ['11:20', '14:00', '16:40', '19:20']
        },
        {
          cine: 'Cinepolis Arco Norte',
          sesiones: ['12:00', '14:30', '17:00', '19:30']
        },
        {
          cine: 'Cinepolis Gran Plaza',
          sesiones: ['13:15', '15:45', '18:15', '20:45']
        }
      ]
    },
    {
      name: 'La leyenda de Ochi',
      image: 'assets/img/LeyendaOchi.jpg',
      clasificacion: 'AA',
      cines: ['Cinepolis Puerto Cancun', 'Cinepolis Arco Norte', 'Cinepolis Plaza las Américas'],
      horarios: [
        {
          cine: 'Cinepolis Puerto Cancun',
          sesiones: ['13:30', '16:15', '19:00', '21:45']
        },
        {
          cine: 'Cinepolis Arco Norte',
          sesiones: ['12:45', '15:30', '18:15', '21:00']
        },
        {
          cine: 'Cinepolis Plaza las Américas',
          sesiones: ['14:00', '16:45', '19:30', '22:15']
        }
      ]
    },
    {
      name: 'Dune: Part Two',
      image: 'assets/img/Dune.jpg',
      clasificacion: 'B',
      cines: ['Cinepolis Cancún Mall', 'Cinepolis Plaza las Américas', 'Cinepolis Gran Plaza'],
      horarios: [
        {
          cine: 'Cinepolis Cancún Mall',
          sesiones: ['12:00', '15:30', '19:00', '22:30']
        },
        {
          cine: 'Cinepolis Plaza las Américas',
          sesiones: ['13:15', '16:45', '20:15']
        },
        {
          cine: 'Cinepolis Gran Plaza',
          sesiones: ['14:30', '18:00', '21:30']
        }
      ]
    },
    {
      name: 'Warfare',
      image: 'assets/img/Warfare.jpg',
      clasificacion: 'C',
      cines: ['Cinepolis Arco Norte', 'Cinepolis Puerto Cancun', 'Cinepolis Cancún Mall'],
      horarios: [
        {
          cine: 'Cinepolis Arco Norte',
          sesiones: ['14:45', '17:30', '20:15', '23:00']
        },
        {
          cine: 'Cinepolis Puerto Cancun',
          sesiones: ['15:00', '17:45', '20:30']
        },
        {
          cine: 'Cinepolis Cancún Mall',
          sesiones: ['16:15', '19:00', '21:45']
        }
      ]
    },
    {
      name: 'Flow',
      image: 'assets/img/Flow.jpg',
      clasificacion: 'B',
      cines: ['Cinepolis Plaza las Américas', 'Cinepolis Gran Plaza', 'Cinepolis Arco Norte'],
      horarios: [
        {
          cine: 'Cinepolis Plaza las Américas',
          sesiones: ['12:20', '14:50', '17:20', '19:50']
        },
        {
          cine: 'Cinepolis Gran Plaza',
          sesiones: ['13:40', '16:10', '18:40', '21:10']
        },
        {
          cine: 'Cinepolis Arco Norte',
          sesiones: ['15:00', '17:30', '20:00', '22:30']
        }
      ]
    },
    {
      name: 'Wicked',
      image: 'assets/img/Wicked.jpg',
      clasificacion: 'A',
      cines: ['Cinepolis Cancún Mall', 'Cinepolis Puerto Cancun', 'Cinepolis Arco Norte'],
      horarios: [
        {
          cine: 'Cinepolis Cancún Mall',
          sesiones: ['11:15', '14:00', '16:45', '19:30', '22:15']
        },
        {
          cine: 'Cinepolis Puerto Cancun',
          sesiones: ['12:30', '15:15', '18:00', '20:45']
        },
        {
          cine: 'Cinepolis Arco Norte',
          sesiones: ['13:45', '16:30', '19:15', '22:00']
        }
      ]
    },
    {
      name: 'Anora',
      image: 'assets/img/Anora.jpg',
      clasificacion: 'B15',
      cines: ['Cinepolis Plaza las Américas', 'Cinepolis Cancún Mall', 'Cinepolis Gran Plaza'],
      horarios: [
        {
          cine: 'Cinepolis Plaza las Américas',
          sesiones: ['15:20', '18:00', '20:40']
        },
        {
          cine: 'Cinepolis Cancún Mall',
          sesiones: ['14:10', '16:50', '19:30', '22:10']
        },
        {
          cine: 'Cinepolis Gran Plaza',
          sesiones: ['13:00', '15:40', '18:20', '21:00']
        }
      ]
    },
    {
      name: 'The Substance',
      image: 'assets/img/Thesubstance.jpg',
      clasificacion: 'C',
      cines: ['Cinepolis Arco Norte', 'Cinepolis Gran Plaza', 'Cinepolis Puerto Cancun'],
      horarios: [
        {
          cine: 'Cinepolis Arco Norte',
          sesiones: ['16:00', '18:45', '21:30']
        },
        {
          cine: 'Cinepolis Gran Plaza',
          sesiones: ['17:15', '20:00', '22:45']
        },
        {
          cine: 'Cinepolis Puerto Cancun',
          sesiones: ['18:30', '21:15']
        }
      ]
    }
  ];
}