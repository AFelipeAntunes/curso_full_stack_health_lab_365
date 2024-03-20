import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component'; // Verifique o caminho correto
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe ReactiveFormsModule

const routes: Routes = [
  { path: '', component: CadastroComponent } // Rota interna do CadastroModule
];

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
