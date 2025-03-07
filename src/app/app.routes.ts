import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LucesComponent } from './pages/luces/luces.component';
import { TemperaturaComponent } from './pages/temperatura/temperatura.component';
import { SeguridadComponent } from './pages/seguridad/seguridad.component';
export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'luces',
        component: LucesComponent,
        title: 'luces'
    },
    {
        path:'temperatura',
        component: TemperaturaComponent,
        title: 'Temperatura'
    },
    {
        path: 'seguridad',
        component: SeguridadComponent,
        title: 'Seguridad'
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];
