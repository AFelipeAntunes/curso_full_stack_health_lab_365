import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { UserComponent } from './user/user.component';
import { ActivityComponent } from './activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DietasComponent } from './pages/dietas/dietas.component'; // Adicione a importação para o componente Dietas
import { PerfilComponent } from './pages/perfil/perfil.component'; // Adicione a importação para o componente Perfil

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'user', component: UserComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dietas', component: DietasComponent }, // Adicione a rota para a página Dietas
  { path: 'perfil', component: PerfilComponent }, // Adicione a rota para a página Perfil
  { path: '', redirectTo: '/home', pathMatch: 'full' } // redireciona para a home se a rota não existir
];
