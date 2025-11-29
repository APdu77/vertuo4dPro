import { Component } from '@angular/core';

@Component({
  selector: 'app-call-button',
  templateUrl: './call-button.component.html',
  styleUrls: ['./call-button.component.scss']
})
export class CallButtonComponent {

  speedDialOpen = false;

  toggleSpeedDial() {
    this.speedDialOpen = !this.speedDialOpen;
  }

  callNumber() {
    window.location.href = 'tel:+33123456789';
  }

  openWhatsApp() {
    const phone = '33612345678'; // numéro sans +
    const message = encodeURIComponent("Bonjour, je souhaite des informations.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }

  sendEmail() {
    window.location.href = "mailto:contact@exemple.com?subject=Demande d'information";
  }

}

