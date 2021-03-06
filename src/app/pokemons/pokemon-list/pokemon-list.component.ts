import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Pokemon} from '../models/pokemon.models';
import {PokemonService} from '../services/pokemon.service';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonsList !: Pokemon[];
  offset = 20;
  limit = 10;
  @Output() idEvent = new EventEmitter<number>();
  pokemonToSearch ?: string ;
  search ?: string;
  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => this.pokemonsList = pokemons);
  }

  getPokemonOnScroll(): void{
  this.pokemonService.getPokemonOnScroll(this.offset, this.limit)
    .subscribe((pokemons) => this.pokemonsList = this.pokemonsList.concat(pokemons));
  this.offset += 10;
  }
  BottlePokemonToTheSea(id: number): void{
    this.idEvent.emit(id);
  };
  getPokemonOnSearch(event: any): void{
      console.log(event);

      if (event === ''){
        this.offset = 20;
        this.limit = 10;
        this.pokemonService.getPokemons().subscribe((pokemons) => this.pokemonsList = pokemons);
      }
      else{
        this.pokemonService.getPokemonOnSearch(event).subscribe((pokemons) => this.pokemonsList = pokemons);
      }
  }
}
