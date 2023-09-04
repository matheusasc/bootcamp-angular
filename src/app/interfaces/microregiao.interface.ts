import {Mesoregiao} from "./mesoregiao.interface";

export interface Microregiao {
  id: number;
  nome: string;
  mesorregiao: Mesoregiao;
}
