import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClasificacionPage } from '../clasificacion/clasificacion';
import { EquiposPage } from '../equipos/equipos';
import { RegistroPage } from '../registro/registro';
import { AuthProvider } from '../../providers/auth/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController, public auth: AuthProvider) {

  }
  itemTapped(event, items) {
    this.navCtrl.push(EquiposPage, {
    });
  }
  salir(){
    this.auth.logout();
  }


  
}
