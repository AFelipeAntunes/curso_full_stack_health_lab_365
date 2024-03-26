import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  // outras propriedades
}

@Component({
  selector: 'app-diet-detail',
  templateUrl: './diet-detail.component.html',
  styleUrls: ['./diet-detail.component.css']
})
export class DietDetailComponent implements OnInit {
  alimento: any;
  listaProdutos: Produto[] = [
    { id: 1, nome: 'Alimento 1', /* outras propriedades */ },
    { id: 2, nome: 'Alimento 2', /* outras propriedades */ },
    // outros alimentos
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.alimento = this.listaProdutos.find(alimento => alimento.id === id);
    }
  }
}
