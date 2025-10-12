import { Component } from '@angular/core';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vertuo4dPro';
  form = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {}

  sendEmail() {
    const serviceID = 'your_service_id'; // Remplace par ton ID de service EmailJS
    const templateID = 'your_template_id'; // Remplace par ton ID de template EmailJS

    emailjs.send(serviceID, templateID, this.form)
      .then((response) => {
        console.log('Message envoyé', response);
        alert('Message envoyé avec succès !');
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  }

  // Base de données des couleurs
  colorDatabase = [
    { name: 'dzRed', hex: '#fd0001' },
    { name: 'dzGreen', hex: '#0f7531' },
  ];

}
