import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial (home)
  { path: 'login', component: LoginComponent }, // Tela de login
  { path: 'cadastro', component: CadastroComponent }, // Tela de cadastro
  // ... outras rotas
];

export default routes;