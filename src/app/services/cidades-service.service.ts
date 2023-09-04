import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Regiao} from "../interfaces/regioes.interfaces";
import {Estados} from "../interfaces/estados.interface";
import {Cidades} from "../interfaces/cidades.interface";

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getRegioes(): Observable<Array<Regiao>>{
    return this.httpClient.get<Array<Regiao>>("https://servicodados.ibge.gov.br/api/v1/localidades/regioes");
  }

  public getEstados(idRegiao: number): Observable<Array<Estados>>{
    return this.httpClient.get<Array<Estados>>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idRegiao}/estados`
    );
  };

  public getCidades(idEstado: number): Observable<Array<Cidades>> {
    return this.httpClient.get<Array<Cidades>>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`
    )
  }
}
