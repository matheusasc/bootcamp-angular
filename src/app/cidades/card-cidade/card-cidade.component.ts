import {Component, Input} from '@angular/core';
import {Cidades} from "../../interfaces/cidades.interface";

@Component({
  selector: 'app-card-cidade',
  templateUrl: './card-cidade.component.html',
  styleUrls: ['./card-cidade.component.scss']
})
export class CardCidadeComponent {
  @Input() cidade: Cidades;

}
