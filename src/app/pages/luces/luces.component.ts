import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-luces',
  imports: [RouterLink, CommonModule],
  templateUrl: './luces.component.html',
  styleUrl: './luces.component.css'
})
export class LucesComponent {
  lucesEncendidas: boolean = false;

  toggleLuces(): void {
    this.lucesEncendidas = !this.lucesEncendidas;
  }
}
