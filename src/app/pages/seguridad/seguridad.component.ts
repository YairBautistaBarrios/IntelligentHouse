import { Component } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  imports: [],
  templateUrl: './seguridad.component.html',
  styleUrl: './seguridad.component.css'
})
export class SeguridadComponent {
  seguridadActivada: boolean = false;

  toggleSeguridad(): void {
    this.seguridadActivada = !this.seguridadActivada;
  }
}
