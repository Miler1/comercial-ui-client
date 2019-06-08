import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = 'http://localhost:8080/oportunidades';

  // ao declarar private a variavel se torna propriedade da classe semelhante a classe java
  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl);
  }

  adicionar(oportunidade: any) {
    return this.httpClient.post(this.apiUrl, oportunidade);
  }
}
