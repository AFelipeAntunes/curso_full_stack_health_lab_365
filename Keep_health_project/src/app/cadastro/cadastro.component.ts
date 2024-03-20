import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
  registerForm: FormGroup; // Declaração da variável

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicialização da variável com um novo FormGroup
    this.registerForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dataNascimento: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      confirmarSenha: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Implementar a lógica de cadastro do usuário
      // Salvar os dados do usuário na localStorage
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