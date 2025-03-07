import { Component } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent {
  seguridadActivada: boolean = false;
  puertasCerradas: boolean = true; // Inicialmente las puertas están cerradas
  ventanasCerradas: boolean = true; // Inicialmente las ventanas están cerradas
  alarmaEncendida: boolean = false; // Inicialmente la alarma está apagada

  // Método para activar o desactivar el sistema de seguridad
  toggleSeguridad(): void {
    this.seguridadActivada = !this.seguridadActivada;
  }

  // Método para alternar el estado de las puertas (cerrar/abrir)
  togglePuertas(): void {
    this.puertasCerradas = !this.puertasCerradas;
    console.log(this.puertasCerradas ? 'Puertas cerradas' : 'Puertas abiertas');
  }

  // Método para alternar el estado de las ventanas (cerrar/abrir)
  toggleVentanas(): void {
    this.ventanasCerradas = !this.ventanasCerradas;
    console.log(this.ventanasCerradas ? 'Ventanas cerradas' : 'Ventanas abiertas');
  }

  // Método para encender o apagar la alarma
  toggleAlarma(): void {
    this.alarmaEncendida = !this.alarmaEncendida;
    console.log(this.alarmaEncendida ? 'Alarma encendida' : 'Alarma apagada');
  }
}
