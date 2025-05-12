import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    imports: [CommonModule],
    selector: 'app-boletos',
    templateUrl: './boletos.component.html',
    styleUrls: ['./boletos.component.css']  // <- corrección aquí
})
export class BoletosComponent {
    seatingLayout = [
    ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'occupied',  'occupied',  'available', 'available', 'available', 'available', 'occupied',  'available', 'empty', 'empty', 'empty', 'empty'],
    ['available', 'occupied',  'available', 'available', 'available', 'available', 'occupied',  'available', 'available', 'available', 'occupied',  'available', 'available', 'available', 'available', 'empty', 'empty', 'empty', 'empty'],
    ['available', 'available', 'available', 'occupied',  'available', 'available', 'available', 'available', 'occupied',  'available', 'available', 'available', 'available', 'available', 'available'],
    ['available', 'available', 'occupied',  'available', 'occupied',  'available', 'available', 'available', 'available', 'occupied',  'available', 'available', 'occupied',  'available', 'available'],
    ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'occupied',  'available', 'available', 'available', 'available'],
    ['occupied',  'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'occupied',  'available', 'available'],
    ['available', 'available', 'available', 'available', 'occupied',  'available', 'available', 'occupied',  'available', 'available', 'available', 'available', 'available', 'available', 'available'],
    ['available', 'occupied',  'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'occupied',  'available', 'available', 'available', 'available'],
    ['available', 'available', 'available', 'available', 'available', 'available', 'occupied',  'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'],
    ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'occupied',  'available']
    ];


  selectedSeats: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  getRowLabel(index: number): string {
    return String.fromCharCode(65 + index);
  }

  isSeatSelected(row: number, seat: number): boolean {
    const seatId = `${this.getRowLabel(row)}${seat + 1}`;
    return this.selectedSeats.includes(seatId);
  }

  selectSeat(rowIndex: number, seatIndex: number): void {
    const seat = this.seatingLayout[rowIndex][seatIndex];
    if (seat === 'available') {
      const seatId = `${this.getRowLabel(rowIndex)}${seatIndex + 1}`;
      const index = this.selectedSeats.indexOf(seatId);
      if (index === -1) {
        this.selectedSeats.push(seatId);
      } else {
        this.selectedSeats.splice(index, 1);
      }
      this.selectedSeats.sort();
    }
  }

  showSuccessMessage = false;
  onContinue(): void {
    this.showSuccessMessage = true;
}
}
