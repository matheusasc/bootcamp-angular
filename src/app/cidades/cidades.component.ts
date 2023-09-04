import {Component, OnInit} from '@angular/core';
import {Estados} from "../interfaces/estados.interface";
import {Cidades} from "../interfaces/cidades.interface";
import {StorageService} from "../services/storage.service";
import {CidadesService} from "../services/cidades-service.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit{
  public isLoading: boolean = true;
  public estado: Estados;
  public listaCidades: Array<Cidades> = [];

  constructor(
    private storageService: StorageService,
    private cidadeService: CidadesService,
    private router: Router,) {
  }
  ngOnInit() {
    const estadoStorage= this.storageService.getItem("estado");
    if(estadoStorage !== null){
      this.estado = JSON.parse(estadoStorage) as Estados;
    }

    this.cidadeService.getCidades(this.estado.id).subscribe({
      next: (response: Array<Cidades>) => {
        this.listaCidades = response;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        window.alert(err.message);
        this.isLoading = false;
      }
    })

  }

}
