import { Injectable } from '@angular/core';
import {Pokemon} from '../models/pokemon.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {apiObject} from '../models/apiObject.models';
import {PokemonDetails} from '../models/pokemonDetails.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';
  getPokemons(): Observable<Pokemon[] > {
    return this.http.get<apiObject>(this.pokemonUrl + '?offset=0' + '&limit=20').pipe(
      map(apiResponse => apiResponse.data)
    ); }

  getPokemon(id: number | undefined): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(this.pokemonUrl + '/' + id);
  }
  getPokemonOnSearch(pokemonToSearch : number):Observable<Pokemon[]>{
    return this.http.get<apiObject>(this.pokemonUrl + '?search=' + pokemonToSearch ).pipe(
      map(apiResponse => apiResponse.data)
    );
  }
  getPokemonOnScroll(offset: number, limit: number): Observable<Pokemon[]>{
    return this.http.get<apiObject>(this.pokemonUrl + '?offset=' + offset + '&limit=' + limit ).pipe(
      map(apiResponse => apiResponse.data)
    );
  }
    constructor(private http: HttpClient) { }
}
