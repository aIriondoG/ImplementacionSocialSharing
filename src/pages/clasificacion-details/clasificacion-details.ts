import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EquipoDetailsPage} from '../equipo-details/equipo-details';

@IonicPage()
@Component({
  selector: 'page-clasificacion-details',
  templateUrl: 'clasificacion-details.html',
})
export class ClasificacionDetailsPage {
  algo: any;
  grupo: number;
  equipo: any[];
  verdadero: boolean;
  nomGrupo: string;
  clasificacion: any;
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.equipo =[];
    this.grupo = navParams.get('grp');
    this.equipo = navParams.get('equipoA');
    console.log("--//"+this.equipo);
    console.log(this.grupo);
    
  }
}
