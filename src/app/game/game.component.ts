import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf, NgStyle} from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, NgIf, NgStyle],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation: boolean = false;
  game: Game = new Game();

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }
  
  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    this.pickCardAnimation = true;
    
  }

  
}
