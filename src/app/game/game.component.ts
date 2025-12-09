import { Component } from '@angular/core';
import { NgForOf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, NgStyle],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation: boolean = false;

  takeCard() {
    this.pickCardAnimation = true;
    
  }

  constructor() { }
}
