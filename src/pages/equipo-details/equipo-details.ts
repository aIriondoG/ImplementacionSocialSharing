import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from '@firebase/util';

@IonicPage()
@Component({
  selector: 'page-equipo-details',
  templateUrl: 'equipo-details.html',
})
export class EquipoDetailsPage {

  sItem: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams , public loadingCtrl: LoadingController) {
    this.sItem = navParams.get('equipos');
    //this.presentLoading();
  
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando grupos...",
      duration: 3000
    });
    loader.present();
  }
}
