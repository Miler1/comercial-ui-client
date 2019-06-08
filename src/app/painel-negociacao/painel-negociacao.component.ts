import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})

export class PainelNegociacaoComponent implements OnInit {

  // oportunidades = [
  //   { descricao: "Projeto de Desenvolvimento de ERP", nomeProspecto: "João", valor: 190000 },
  //   { descricao: "Manutenção de CRM por 1 ano", nomeProspecto: "Zé Santos", valor: 90000 }
  // ]

  oportunidade = {};
  oportunidades = [];

  constructor(private oportunidadeService: OportunidadeService, private messageService: MessageService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.oportunidadeService.listar()
      .subscribe(resposta => this.oportunidades = <any> resposta);
  }

  adicionar() {
    this.oportunidadeService.adicionar(this.oportunidade)
      .subscribe(() => {
        this.oportunidade = {};
        this.consultar();
        this.messageService.add({
          severity: 'success',
          summary: 'Oportunidade adicionada com sucesso!'
        });
      },
      resposta => {
        let msg = 'Erro inesperado. Tente novamente';

        if (resposta.error.message) {
          msg = resposta.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        });
      });
  }

}
