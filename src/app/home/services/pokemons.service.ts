import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from "src/app/environtments/environtment";
import { Pokemons } from '../models/pokemosLista';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  public getListaPokemons(): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${Api.urlBase}/api/v2/pokemon?limit=100&offset=0`);
  }

  public anteriorLista(url: string): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${url}`);
  }

  public siguienteLista(url: string): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${url}`);
  }

 
}
