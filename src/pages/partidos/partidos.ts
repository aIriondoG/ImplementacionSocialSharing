import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosDetailsPage } from '../partidos-details/partidos-details'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Observable } from '@firebase/util';
import { AuthProvider } from '../../providers/auth/auth';
@IonicPage()
@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html',
})
export class PartidosPage {
  //partido: any;
  date: string;
  nPartidos: any;
  listaPartidos: AngularFireList<any>;
  partido: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public auth: AuthProvider) {
    this.listaPartidos = this.afDatabase.list('/Partidos');
    this.partido = this.listaPartidos.valueChanges();
    this.partido.subscribe(result => {
      this.nPartidos = result;
      console.log("Result--> " + result);
      console.log(this.nPartidos);
      console.log(this.nPartidos.length);
    });

    this.presentLoading();
    console.log("----");
    if(this.nPartidos != null){
      this.filtroPartido();
    }else{
      console.log("Lo hemos intentado"+this.nPartidos);
    }
    
    //this.partido.subscribe(result => {result.length});
    
    //console.log(this.nPartidos.length);

  }
  salir(){
    this.auth.logout();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Los partidos aun no han sido cargados, vuelve a clickar en el grupo',
      duration: 200,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando partidos...",
      duration: 2000
    });
    loader.present();
  }

  filtroPartido() {
    if (this.nPartidos != null) { 
    console.log("Metodo filtro partido");

    if (this.partido != null) {
      //console.log("Filtramos date , " + this.partido.length);
      for (let i = 0; i < this.nPartidos.length; i++) {
        console.log(this.nPartidos.length);
        console.log("--" + this.date + "--" + this.partido[i].datetime);
        this.date = this.partido[i].datetime.substring(8, 10);
        this.date = this.date + "/" + this.partido[i].datetime.substring(5, 7);
        this.date = this.date + " " + this.partido[i].datetime.substring(12, 16) + "h.";
        this.partido[i].datetime = this.date;

      }
    } else {
      this.presentToast();
    }
  }else{
    console.log("Demomento null");
  }
}

itemTapped(event, partido) {
  this.navCtrl.push(PartidosDetailsPage, {
    partido: partido,
  });
}

}
