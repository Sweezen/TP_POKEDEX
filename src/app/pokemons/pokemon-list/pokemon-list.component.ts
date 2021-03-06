import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../models/pokemon.models';
import {PokemonService} from '../services/pokemon.service';
import {concat} from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonsList !: Pokemon[];
  offset = 20;
  limit = 10;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => this.pokemonsList = pokemons);
  }

  getPokemonOnScroll(): void{
  this.pokemonService.getPokemonOnScroll(this.offset, this.limit).subscribe((pokemons) => this.pokemonsList = this.pokemonsList.concat(pokemons));
  this.offset += 10;
  }
}
