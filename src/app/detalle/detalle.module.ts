import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle.component';
import { DetalleRoutingModule } from './detalle-routing.module';
import { PokemonsService } from './services/pokemons.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    SharedModule
  ],
  providers:[
    PokemonsService
  ]
})
export class DetalleModule { }
