import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent {
  temperatura: number = 22; // Temperatura inicial

  aumentarTemperatura(): void {
    this.temperatura++;
  }

  disminuirTemperatura(): void {
    this.temperatura--;
  }
}
