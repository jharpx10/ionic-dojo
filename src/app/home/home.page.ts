import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}
  async alertHello() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Alerta';
  alert.subHeader = 'Hello World';
  alert.message = 'Boton con IONIC';
  alert.buttons = ['OK'];
  document.body.appendChild(alert);
  await alert.present();
  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
  }
  async alertHello2() {
    const alert2 = document.createElement('ion-alert');
    alert2.cssClass = 'my-custom-class';
    alert2.header = 'Alerta 2';
    alert2.subHeader = 'Hello World 2';
    alert2.message = 'Boton con IONIC';
    alert2.buttons = ['OK'];
    document.body.appendChild(alert2);
    await alert2.present();
    const { role } = await alert2.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    }
    async alertHello3() {
      const alert3 = document.createElement('ion-alert');
      alert3.cssClass = 'my-custom-class';
      alert3.header = 'Alerta 3';
      alert3.subHeader = 'Hello World 3';
      alert3.message = 'Boton con IONIC';
      alert3.buttons = ['OK'];
      document.body.appendChild(alert3);
      await alert3.present();
      const { role } = await alert3.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
      }

}
