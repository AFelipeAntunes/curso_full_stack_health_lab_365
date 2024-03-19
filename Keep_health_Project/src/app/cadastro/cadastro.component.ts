import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid && form.value.senha === form.value.confirmarSenha) {
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      usuarios.push({ email: form.value.email, senha: form.value.senha });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.router.navigate(['/login']);
    }
  }

  onVoltar() {
    this.router.navigate(['/login']);
  }
}