// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { DietasComponent } from './dietas/dietas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dietas', component: DietasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'diet-detail', component: DietDetailComponent },
  // outras rotas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
