import {Component, OnInit} from '@angular/core';
import {Regiao} from "../interfaces/regioes.interfaces";
import {Estados} from "../interfaces/estados.interface";
import {StorageService} from "../services/storage.service";
import {CidadesService} from "../services/cidades-service.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit{
  public isLoading: boolean = true;
  public regiao: Regiao;
  public listaEstados: Array<Estados> = [];

  constructor(
    private storageService: StorageService,
    private cidadeService: CidadesService,
    private router: Router,
  ) {
  }
  ngOnInit() {
    const regiaoStorage= this.storageService.getItem("regiao");
    if(regiaoStorage !== null){
      this.regiao = JSON.parse(regiaoStorage) as Regiao;
    }

    this.cidadeService.getEstados(this.regiao.id).subscribe({
      next: (response: Array<Estados>) => {
        this.listaEstados = response;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        window.alert(err.message);
        this.isLoading = false;
      }
    })
  }
  public verCidades(estado:Estados): void{
    this.storageService.setItem(
      "estado",
      JSON.stringify(estado)
    );
    this.router.navigate(["estados/cidades"]);
  }
}
