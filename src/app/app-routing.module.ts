import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EstadosComponent} from "./estados/estados.component";
import {CidadesService} from "./services/cidades-service.service";
import {CidadesComponent} from "./cidades/cidades.component";

const routes: Routes = [
  {
    path:'',
    title: "Home Page",
    component: HomeComponent
  },
  {
    path: 'estados',
    children: [
      {
        path:'',
        title: "Estados",
        component: EstadosComponent
      },
      {
        path:'cidades',
        title: "Cidades",
        component: CidadesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

