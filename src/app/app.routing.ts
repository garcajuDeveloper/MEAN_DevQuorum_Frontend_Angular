// Importar los modulos del router
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// Importar componentes
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
// Array de rutas
const appRoutes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'home', component : HomeComponent},
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent},
    {path : 'settings', component : UserSettingsComponent},
    {path : '**', component : LoginComponent}
];
// Esportar configuración

export const appRoutingProvider : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);