import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PokemonDetails} from '../models/pokemonDetails.models';
import {PokemonService} from '../services/pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {
  @Input() selectedPokemon ?: number ;

  pokemonDetails ?: PokemonDetails;
  constructor(private pokemonservice: PokemonService, private route: ActivatedRoute ) { }

  ngOnChanges(): void {
    this.getPokemon();
  }

  getPokemon(): void{
    if (this.selectedPokemon != null) {
    this.pokemonservice.getPokemon(this.selectedPokemon).subscribe(pokemon  => this.pokemonDetails = pokemon);
    //console.log(this.pokemonDetails);
    }
  }

}
