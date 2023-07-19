import { Component } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';
import { Pokemon, Pokemons } from './models/pokemosLista';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public listaPokemons: Pokemon[] = [];
  public pagAnterior: string = "";
  public pagSiguiente: string = "";
  public limitePagina: number = 0;

  constructor(
    private pokemonService: PokemonsService,
    private route: Router,
    public loaderService: LoaderService
  ){}

  ngOnInit(): void{
    this.getPokemons();
  }

  public getPokemons(): void{
    this.loaderService.setLoading(true);
    this.pokemonService.getListaPokemons()
    .subscribe({
      next: (pokemons: Pokemons) => {
      //console.log("POKEMON", pokemons)
      this.loaderService.setLoading(false);
      this.listaPokemons = pokemons.results;
      this.pagAnterior = pokemons.previous;
      this.pagSiguiente = pokemons.next;
      this.extraerLimite(pokemons.next);
    },
    error: (error) => {
      this.loaderService.setLoading(false);
    }
    })
  }

  public detalle(url: any): void{
    sessionStorage.setItem('urlPokemon', url);
    this.route.navigate(['detalle']);
  }

  public extraerLimite(url: string): void{
    if(url && url !== '' || url !== null){
      let limite = url.split('&');
      let cadena = limite[0].split('=');
      this.limitePagina = +cadena[1];

    }

  }

  public anterior(): void{
    if(this.pagAnterior !== ''){
      this.loaderService.setLoading(true);
      this.pokemonService.anteriorLista(this.pagAnterior)
      .subscribe({
        next: (pokemons: Pokemons) => {
          this.loaderService.setLoading(false);
          this.listaPokemons = pokemons.results;
          this.pagAnterior = pokemons.previous;
          this.pagSiguiente = pokemons.next;
          this.extraerLimite(pokemons.next);
        },
        error: (error) => {
          this.loaderService.setLoading(false);
        }
     
      })
    }
  }

  public siguiente(): void{
   if(this.pagSiguiente !== ''){
      this.loaderService.setLoading(true);
      this.pokemonService.siguienteLista(this.pagSiguiente)
      .subscribe({
        next: (pokemons: Pokemons) => {
         // console.log("SIGUIENTE", pokemons)
          this.loaderService.setLoading(false);
          this.listaPokemons = pokemons.results;
          this.pagAnterior = pokemons.previous;
          this.pagSiguiente = pokemons.next;
          this.extraerLimite(pokemons.next);
        },
        error: (error) => {
          this.loaderService.setLoading(false);
        }
      
      })
    }
  }

}
