import { Component, OnInit } from '@angular/core';
import { ViaCEPService } from '../../via-cep.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  cep = '';
  endereco = '';

  constructor(private viaCEPService: ViaCEPService) { }

  ngOnInit(): void {
  }

  pesquisar() {
    this.viaCEPService.getAddress(this.cep).subscribe((data: any) => {
      this.endereco = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
    });
  }
}
