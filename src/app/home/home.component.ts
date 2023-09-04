import {Component, OnInit} from '@angular/core';
import {CidadesService} from "../services/cidades-service.service";
import {Regiao} from "../interfaces/regioes.interfaces";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public isLoading: boolean = true;
  public listaRegioes: Array<Regiao> = []
  constructor(
    private cidadeService: CidadesService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.cidadeService.getRegioes().subscribe({
      next: (reponse: Array<Regiao>) => {
        this.listaRegioes = reponse;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        window.alert(err.message);
        this.isLoading = false;
      }
    })
  }

  public verEstados(regiao: Regiao): void {
    this.storageService.setItem(
      "regiao",
      JSON.stringify(regiao)
    );
    this.router.navigate(["/estados"]);
  }
}
