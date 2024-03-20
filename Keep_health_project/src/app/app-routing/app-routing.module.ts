import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { CadastroComponent } from './cadastro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', redirectTo: 'home' } // Rota padrão para redirecionar URLs inválidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
