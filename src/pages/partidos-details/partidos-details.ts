import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Implementacion de social sharing
import { SocialSharing } from '@ionic-native/social-sharing';
//Implementacion de af2
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MapaPage } from '../mapa/mapa';
import {Observable} from 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
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
  sItem: any;

  local: any;
  listaLocalizaciones: AngularFireList<any>;
  localizacion: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing , public afDatabase: AngularFireDatabase) {
    this.sItem = navParams.get('partido');
    /*this.sELocal = this.sItem.eventoL;*/
    this.sEventoLocal = this.sItem.home_team_events;
    this.sEventoVisitante = this.sItem.away_team_events;

    this.listaLocalizaciones = this.afDatabase.list('/Posicion');
    this.localizacion = this.listaLocalizaciones.valueChanges();
    
    
    //this.eventos = this.sEventoLocal.concat(this.sEventoVisitante);
    //this.eventos = this.sEventoVisitante;
  }
  /*.then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});*/
  //this.social.shareViaTwitter(message, image, url);
  viaIG(p) {
    this.socialSharing.shareViaInstagram("The winner is "+p.winner, '../../assets/imgs/Banderas/'+p.winner+".png").then(() => {
      console.log("shareViaInstagram: Success");
    }).catch(() => {
      console.log("shareViaInstagram: failed");
    });
  }
viaFacebook(p){
  this.socialSharing.shareViaFacebook("The Winner is "+p.winner, '../../assets/imgs/Banderas/'+p.winner+".png", "url").then(() => {
    console.log("shareViaFacebook: Success");
  }).catch(() => {
    console.log("shareViaFacebook: failed");
  });
}
//this.social.shareViaFacebook(message, image, url);
viaTwitter(p){
  this.socialSharing.shareViaTwitter("The Winner is "+p.winner, '../../assets/imgs/Banderas/'+p.winner+".png", "url").then(() => {
    console.log("shareViaTwitter: Success");
  }).catch(() => {
    console.log("shareViaTwitter: failed");
  });
}
viaWhatsapp(p){
  this.socialSharing.shareViaWhatsApp("The Winner is "+p.winner, '../../assets/imgs/Banderas/'+p.winner+".png", "url").then(() => {
    console.log("shareViaWhatsapp: Success");
  }).catch(() => {
    console.log("shareViaWhatsapp: failed");
  });
}
//this.social.shareViaFacebookWithPasteMessageHint(message, image, url, pasteMessageHint);
//this.social.shareViaInstagram(message, image);
localizar(event, nombre){
  this.localizacion.subscribe(
    (data) => {
      console.log(data);
      this.local = data;
      console.log("Antes: " + this.local);
      this.navCtrl.push(MapaPage, {
        local: this.local,
        nombre: nombre
      });
    }
  );

}

}
