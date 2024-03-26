import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { UserComponent } from './user/user.component';
import { ActivityComponent } from './activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DietasComponent } from './pages/dietas/dietas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DietComponent } from './pages/diet/diet.component'; // Adicione a importação para o componente Diet
import { DietDetailComponent } from './pages/diet-detail/diet-detail.component'; // Adicione a importação para o componente DietDetail

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'user', component: UserComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dietas', component: DietasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'diet', component: DietComponent }, // Adicione a rota para a página Diet
  { path: 'diet-detail', component: DietDetailComponent }, // Adicione a rota para a página DietDetail
  { path: '', redirectTo: '/home', pathMatch: 'full' } // redireciona para a home se a rota não existir
];
