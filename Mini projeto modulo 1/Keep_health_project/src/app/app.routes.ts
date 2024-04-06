// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dietas', component: DietComponent },
  { path: 'diet-detail', component: DietDetailComponent },
  { path: 'perfil', component: ProfileComponent },
  // outras rotas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
