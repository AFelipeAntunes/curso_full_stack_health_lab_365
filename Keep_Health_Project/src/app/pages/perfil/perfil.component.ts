import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cmToMeters'})
export class CmToMetersPipe implements PipeTransform {
  transform(value: number): number {
    return value / 100;
  }
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nome = 'Usuário Aleatório';
  email = 'usuario@exemplo.com';
  peso = Math.floor(Math.random() * 100) + 50;
  altura = Math.floor(Math.random() * 200) + 150;
  codigoUsuario = Math.floor(Math.random() * 10000);
  idade = Math.floor(Math.random() * 100);

  constructor() { }

  ngOnInit(): void {
  }
}
