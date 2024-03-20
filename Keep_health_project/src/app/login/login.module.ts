import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component'; // Verifique o caminho correto
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe ReactiveFormsModule

const routes: Routes = [
  { path: '', component: LoginComponent } // Rota interna do LoginModule
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
