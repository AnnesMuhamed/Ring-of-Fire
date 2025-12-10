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
  currentCard: string = '';
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
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() || '';
      console.log(this.currentCard);
      this.pickCardAnimation = true;
      
    
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}
