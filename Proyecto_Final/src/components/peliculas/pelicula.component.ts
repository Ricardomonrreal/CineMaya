import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    imports: [CommonModule],
    templateUrl: './pelicula.component.html',
    styleUrl: './pelicula.component.css' 

  })

export class PeliculasComponent {
  peliculas = [
    { name: 'Thunderbolts', image: 'assets/img/image003_929d0db0.jpeg'},
    { name: 'Minecraft', image: 'assets/img/Minecraft.jpg'},
    { name: 'La leyenda de Ochi', image: 'assets/img/LeyendaOchi.jpg'},

  ];
}