import { Component } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';
import { DetallePokemon } from './models/detallePokemon';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  public urlPokemon: string = "";
  public detallePokemon!: DetallePokemon;

  constructor(
    private pokemonDetService: PokemonsService,
    public loaderService: LoaderService
    ){}

  ngOnInit(): void{
    if(sessionStorage.getItem('urlPokemon')){
      this.urlPokemon = sessionStorage.getItem("urlPokemon");
      this.loaderService.setLoading(true);
      this.pokemonDetService.detallePokemon(this.urlPokemon)
      .subscribe({
        next: (detPokemon) => {
          //console.log("DETALLE", detPokemon);
          this.loaderService.setLoading(false);
          this.detallePokemon = detPokemon;
        },
        error: (error) => {
          this.loaderService.setLoading(false);
        }
   
      });
    }
  }
}
