import { Component } from '@angular/core';
import * as Papa from 'papaparse';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [BaseChartDirective, CommonModule, FormsModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  // Configuración de las gráficas
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    color: '#FAF5E9', // Color de texto global para el gráfico
    plugins: {
      legend: {
        fullSize: true,
        position: 'right',
        labels: {
          color: '#FAF5E9', // Color del texto en la leyenda
          boxWidth: 10,
          font: {
            family: "'JetBrains Mono', monospace",
            size: 12
          }
        }
      },
      tooltip: {
        titleColor: '#FAF5E9', // Color del título del tooltip
        bodyColor: '#ffffff', // Color del cuerpo del tooltip
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo del tooltip para mejor contraste
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + ' entradas';
            }
            return label;
          }
        }
      }
    },
  };

  public pieChartType: ChartType = 'pie';
  
  // Datos para las gráficas
  public pieChartData1: ChartData<'pie'> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: []
    }]
  };

  public pieChartData2: ChartData<'pie'> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: []
    }]
  };
  
  // Datos del CSV
  csvData: any[] = [];
  
  // Estado de carga
  isLoading: boolean = false;
  errorMessage: string = '';

  // Maneja la carga del archivo CSV
  handleFileUpload(event: any): void {
    this.isLoading = true;
    this.errorMessage = '';
    const file = event.target.files[0];
    
    if (!file) {
      this.isLoading = false;
      return;
    }
    
    Papa.parse(file, {
      header: true,
      dynamicTyping: true, // Convierte automáticamente números
      skipEmptyLines: true,
      complete: (results) => {
        this.csvData = results.data;
        if (this.csvData.length > 0) {
          this.updateCharts();
        } else {
          this.errorMessage = 'El archivo CSV no contiene datos válidos.';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al procesar el archivo CSV: ' + error.message;
        this.isLoading = false;
      }
    });
  }

  // Actualiza las gráficas con los datos del CSV
  updateCharts(): void {
    this.updateCineChart();
    this.updatePeliculaChart();
  }

  // Actualiza la gráfica de entradas por cine
  private updateCineChart(): void {
    const ventasPorCine: { [key: string]: number } = {};
    
    this.csvData.forEach(row => {
      const cine = row['Cine'];
      const entradas = row['Entradas_Vendidas'] || 0;
      
      if (cine && entradas) {
        ventasPorCine[cine] = (ventasPorCine[cine] || 0) + entradas;
      }
    });
    
    const labels = Object.keys(ventasPorCine);
    const data = Object.values(ventasPorCine);
    const backgroundColors = this.generateColors(labels.length);
    
    this.pieChartData1 = {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColors,
        borderColor: '#000000', // Borde negro para separar los segmentos
        borderWidth: 1,
        hoverBorderColor: '#ffffff', // Borde blanco al pasar el mouse
        hoverBorderWidth: 2
      }]
    };
  }

  // Actualiza la gráfica de entradas por película
  private updatePeliculaChart(): void {
    const ventasPorPelicula: { [key: string]: number } = {};
    
    this.csvData.forEach(row => {
      const pelicula = row['Pelicula'];
      const entradas = row['Entradas_Vendidas'] || 0;
      
      if (pelicula && entradas) {
        ventasPorPelicula[pelicula] = (ventasPorPelicula[pelicula] || 0) + entradas;
      }
    });
    
    const labels = Object.keys(ventasPorPelicula);
    const data = Object.values(ventasPorPelicula);
    const backgroundColors = this.generateColors(labels.length);
    
    this.pieChartData2 = {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColors,
        borderColor: '#000000', // Borde negro para separar los segmentos
        borderWidth: 1,
        hoverBorderColor: '#ffffff', // Borde blanco al pasar el mouse 
        hoverBorderWidth: 2
      }]
    };
  }

  // Genera colores aleatorios para el gráfico
  private generateColors(count: number): string[] {
    // Paleta de colores más vibrante y compatible con fondo oscuro
    const colors = [];
    const baseHues = [20, 60, 120, 180, 240, 280, 320]; // Distintos tonos base
    
    for (let i = 0; i < count; i++) {
      // Usamos los tonos base y variamos la saturación/luminosidad
      const hue = baseHues[i % baseHues.length];
      const sat = 80 + Math.random() * 20; // Saturación alta (80-100%)
      const light = 55 + Math.random() * 15; // Luminosidad media-alta (55-70%)
      
      colors.push(`hsl(${hue}, ${sat}%, ${light}%)`);
    }
    return colors;
  }
}