import {Regiao} from "./regioes.interfaces";

export interface Estados{
  id:number;
  nome:string;
  sigla:string;
  regiao: Regiao;
}
