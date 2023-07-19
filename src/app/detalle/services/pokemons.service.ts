import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DetallePokemon } from '../models/detallePokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  public detallePokemon(url: string): Observable<any> {
    return this.http.get<any>(`${url}`);
  }
}
