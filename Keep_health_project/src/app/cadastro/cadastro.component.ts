import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
  registerForm: FormGroup<Usuario>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup<Usuario>({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const usuario: Usuario = {
        nome: this.registerForm.get('nome').value,
        email: this.registerForm.get('email').value,
        senha: this.registerForm.get('senha').value,
      };

      const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
      usuariosCadastrados.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

      console.log('Formulário enviado!');
      this.router.navigate(['/login']);
    } else {
      // Exibir mensagens de erro
    }
  }

  voltar() {
    this.router.navigate(['/login']);
  }
}