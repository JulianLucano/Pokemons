import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { PokemonsService } from "./services/pokemons.service";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
    HomeComponent
  ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      SharedModule
    ],
    providers: [
        PokemonsService
    ],
    bootstrap: []
  })

  export class HomeModule { }