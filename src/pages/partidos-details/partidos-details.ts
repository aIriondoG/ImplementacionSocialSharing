import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Implementacion del metodo de afb2

@IonicPage()
@Component({
  selector: 'page-partidos-details',
  templateUrl: 'partidos-details.html',
})
export class PartidosDetailsPage {
  //sItem: any;
  sEventoLocal: any;
  sEventoVisitante: any;
  eventos: any;
  sItem: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sItem = navParams.get('partido');
    /*this.sELocal = this.sItem.eventoL;*/
    this.sEventoLocal = this.sItem.home_team_events;
    this.sEventoVisitante = this.sItem.away_team_events;
    //this.eventos = this.sEventoLocal.concat(this.sEventoVisitante);
    //this.eventos = this.sEventoVisitante;
  }

}
