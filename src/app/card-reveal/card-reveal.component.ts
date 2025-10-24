import { Component } from '@angular/core';

@Component({
  selector: 'app-card-reveal',
  templateUrl: './card-reveal.component.html',
  styleUrls: ['./card-reveal.component.scss']
})

export class CardRevealComponent {
  revealed: { [id: number]: boolean } = {};
  cards = [
    {
      id: 1,
      title: 'Dératisation',
      imageUrl:'assets/images/no_rats.png',
      content: 'Texte caché de la carte 1',
    },
    {
      id: 2,
      title: 'Désinsectisation',
      imageUrl:'assets/images/no_bugs.png',
      content: 'Texte caché de la carte 2',
    },
    {
      id: 3,
      title: 'Désinfection',
      imageUrl:'assets/images/no_virus.jpg',
      content: 'Texte caché de la carte 3',
    },
    {
      id: 4,
      title: 'Dépigeonnage',
      imageUrl:'assets/images/no_pigeons.png',
      content: 'Texte caché de la carte 4',
    },
  ];

toggleReveal(id:number) : void {
  this.revealed[id] = !this.revealed[id];
}

}

