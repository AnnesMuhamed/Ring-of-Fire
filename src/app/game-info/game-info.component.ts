import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {
  
  
    carddAction = 
    [
    {
      title: "Freeze",
      description: "Alle Spieler müssen sofort einfrieren. Der Letzte, der sich bewegt, bekommt eine Extraaufgabe."
    },
    {
      title: "Erzähler",
      description: "Erzähle eine kurze Geschichte mit genau drei Sätzen."
    },
    {
      title: "Linke Hand",
      description: "Bis zur nächsten Runde darfst du nur deine linke Hand benutzen."
    },
    {
      title: "Geräusche",
      description: "Mache ein Tiergeräusch. Die anderen müssen erraten, welches es ist."
    },
    {
      title: "Speedrunde",
      description: "Nenne innerhalb von 5 Sekunden drei Dinge aus einer Kategorie deiner Wahl."
    },
    {
      title: "Spiegel",
      description: "Wähle einen Spieler. Er muss jede deiner Bewegungen nachmachen."
    },
    {
      title: "Challenge",
      description: "Mache 10 Kniebeugen oder 5 Liegestütze."
    },
    {
      title: "Fragenverbot",
      description: "Du darfst bis zur nächsten Runde keine Fragen stellen."
    },
    {
      title: "Kompliment",
      description: "Mache einem Mitspieler ein ehrliches Kompliment."
    },
    {
      title: "Regelmeister",
      description: "Erfinde eine neue Regel, die ab jetzt gilt."
    },
    {
      title: "Flüstern",
      description: "Sprich bis zur nächsten Runde nur flüsternd."
    },
    {
      title: "Gedächtnis",
      description: "Zähle alle bisherigen Karten in der richtigen Reihenfolge auf."
    },
    {
      title: "Tausch",
      description: "Tausche deinen Platz mit einem anderen Spieler."
    }
  ];

  title = '';
  description = '';
  @Input() card: string = '';
  constructor(){}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.carddAction[cardNumber - 1].title;
      this.description = this.carddAction[cardNumber - 1].description;
    }
  }
}  