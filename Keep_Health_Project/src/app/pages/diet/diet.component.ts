import { Component, OnInit } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  // outras propriedades
}

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {
  listaProdutos: Produto[] = [
    { id: 1, nome: 'Alimento 1', /* outras propriedades */ },
    { id: 2, nome: 'Alimento 2', /* outras propriedades */ },
    // outros alimentos
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
