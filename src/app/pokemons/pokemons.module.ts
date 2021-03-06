import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {AppRoutingModule} from '../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MatGridListModule} from '@angular/material/grid-list';
import { PokedexComponent } from './pokedex/pokedex.component';



@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    AppRoutingModule,
    MatCardModule,
    InfiniteScrollModule
  ]
})
export class PokemonsModule { }
