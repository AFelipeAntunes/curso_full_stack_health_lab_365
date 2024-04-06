// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  // outras rotas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
