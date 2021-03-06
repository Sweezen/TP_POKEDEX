import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  @Input() id?: number;
  idEvent?: number ;
  constructor() { }

  ngOnInit(): void {
  }
  getBottleOfTheSea(id: number): void{
    this.idEvent = id;
  }
}
