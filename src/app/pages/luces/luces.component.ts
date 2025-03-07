import { Component, signal, computed } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-luces',
  standalone: true,
  imports: [CommonModule,  NgFor],
  templateUrl: './luces.component.html',
  styleUrl: './luces.component.css'
})
export class LucesComponent {
  // Signal para manejar el estado de las luces
  luces = signal([
    { nombre: 'Patio', encendida: false },
    { nombre: 'Cocina', encendida: false },
    { nombre: 'Habitación', encendida: false },
    { nombre: 'Baño', encendida: false },
    { nombre: 'Sala', encendida: false }
  ]);

  // Computed para saber si todas las luces están encendidas
  lucesEncendidas = computed(() => this.luces().every(luz => luz.encendida));

  // Alternar una luz individual
  toggleLuz(index: number): void {
    const nuevasLuces = [...this.luces()];
    nuevasLuces[index].encendida = !nuevasLuces[index].encendida;
    this.luces.set(nuevasLuces);
  }

  // Alternar todas las luces a la vez
  toggleTodasLasLuces(): void {
    const estado = !this.lucesEncendidas();
    const nuevasLuces = this.luces().map(luz => ({ ...luz, encendida: estado }));
    this.luces.set(nuevasLuces);
  }
}
