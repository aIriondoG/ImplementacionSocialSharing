import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClasificacionPage } from '../clasificacion/clasificacion';
import { EquiposPage } from '../equipos/equipos';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  itemTapped(event, items) {
    this.navCtrl.push(EquiposPage, {
    });
  }

  
}
