import { Component, OnInit } from '@angular/core';
import {PokemonDetails} from '../models/pokemonDetails.models';
import {PokemonService} from '../services/pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemonDetails ?: PokemonDetails;
  constructor(private pokemonservice: PokemonService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonservice.getPokemon(id).subscribe(pokemon  => this.pokemonDetails = pokemon);
    console.log(this.pokemonDetails);
  }

}
