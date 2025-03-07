import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent {
  temperatura: number = 22;  // Temperatura inicial
  ventiladorEncendido: boolean = false;  // Estado inicial del ventilador

  disminuirTemperatura() {
    this.temperatura -= 1;  // Disminuir en 1°C
  }

  aumentarTemperatura() {
    this.temperatura += 1;  // Aumentar en 1°C
  }

  toggleVentilador() {
    this.ventiladorEncendido = !this.ventiladorEncendido;  // Cambiar el estado del ventilador
  }
  }
