import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cards = [
    {
      id: 1,
      title: 'Dératisation',
      imageUrl:'assets/images/no_rats.png',
      dialogImageUrl:'assets/images/no_rats_2.png',
      content: `
      Des rats ou souris ont envahi vos locaux ou votre domicile ?
      Ces rongeurs représentent un risque sanitaire majeur : contamination alimentaire, dégradations électriques, mauvaises odeurs et transmission de maladies.
      Nos experts interviennent rapidement pour localiser les points d’accès, éliminer la colonie et mettre en place des solutions préventives afin d’éviter toute réinfestation.
      Protégez vos espaces, votre santé et votre image : retrouvez un environnement sûr et sans rongeurs.
              `,
    },
    {
      id: 2,
      title: 'Désinsectisation',
      imageUrl:'assets/images/no_bugs.png',
      dialogImageUrl:'assets/images/no_bugs_2.png',
      content: `
      Vous constatez des insectes chez vous ou dans votre entreprise ?
      Cafards, fourmis ou punaises de lit représentent un vrai danger pour la santé et l’hygiène.
      Nos experts interviennent rapidement pour détecter l’origine de l’infestation, traiter efficacement les zones touchées selon des protocoles stricts et sécuriser durablement vos espaces.
      Retrouvez un cadre de vie propre et sain, sans rampants.
      `,
    },
    {
      id: 3,
      title: 'Désinfection',
      imageUrl:'assets/images/no_virus.png',
      dialogImageUrl:'assets/images/no_virus_2.png',
      content: `
      La présence de virus, bactéries ou moisissures met en danger la santé de vos collaborateurs, de vos clients ou de votre famille.
Une contamination peut survenir après une infestation de nuisibles notamment, mais également après le passage de personnes dans les lieux fréquentés ou un dégât des eaux.
Nos spécialistes procèdent à une désinfection complète des surfaces et de l’air à l’aide de produits homologués, efficaces contre les agents pathogènes les plus résistants.
Nous éliminons les risques de propagation et garantissons un environnement assaini, sécurisé et conforme aux normes d’hygiène.
      `,
    },
    {
      id: 4,
      title: 'Dépigeonnage',
      imageUrl:'assets/images/no_pigeons.png',
      dialogImageUrl:'assets/images/no_pigeons_2.png',
      content: `
      Les pigeons peuvent s’installer durablement sur tout type d'édifice, provoquant nuisances sonores, salissures par les fientes, dégradations des structures et risques sanitaires (transmission de maladies).
      Nos équipes interviennent pour éloigner durablement ces oiseaux à l’aide de dispositifs professionnels : filets, pics anti-pigeons, systèmes répulsifs ou solutions électroniques adaptées à l’architecture du site.
      Nous sécurisons vos toitures, balcons et façades tout en respectant la réglementation et le bien-être animal, afin de préserver votre image et votre tranquillité.
      `,
    },
  ];

  constructor(private dialog: MatDialog) {}

  openDialog(card: any) {
    this.dialog.open(CardDialogComponent, {
      data: card,
      width: '80vw',
      maxWidth: '600px',
      panelClass: 'custom-dialog-container',
      backdropClass: 'custom-dialog-backdrop'
    });
  }
}
