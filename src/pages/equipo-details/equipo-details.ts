import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from '@firebase/util';
import {SocialSharing} from '@ionic-native/social-sharing';
@IonicPage()
@Component({
  selector: 'page-equipo-details',
  templateUrl: 'equipo-details.html',
})
export class EquipoDetailsPage {

  sItem: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams , public loadingCtrl: LoadingController , public socialSharing: SocialSharing) {
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
}
