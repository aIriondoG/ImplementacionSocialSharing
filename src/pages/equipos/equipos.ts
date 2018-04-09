import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EquipoDetailsPage } from '../equipo-details/equipo-details';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
import { Observable } from '@firebase/util';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {
  items: Observable<any[]>;
  searchQuery: string = '';
  listaEquipos: AngularFireList<any>;
  equipos: Observable<any[]>;
  equipo: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    public loadingCtrl: LoadingController, 
    public auth: AuthProvider) {

    this.listaEquipos = this.afDatabase.list('/Equipos');
    this.equipos = this.listaEquipos.valueChanges();

    this.items= this.equipos;
    this.presentLoading();
  }

  itemTapped(event, equipo) {
    this.navCtrl.push(EquipoDetailsPage, {
      equipos: equipo
    });
  }
  salir(){
    this.auth.logout();
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando equipos...",
      duration: 500
    });
    loader.present();
  }
  /*getItems(ev: any) {
    // Reset items back to all of the items
    this.equipos = this.items;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '')  {
      this.equipos.subscribe(result => {
        this.equipo = result;
        console.log(this.equipo);
        console.log(this.equipo.length);
        for(let i =0; i<this.equipo.length;i++){
          console.log(this.equipo[i].country);
        }
        //console.log(this.equipo.country);
        this.equipo = this.equipo.filter(
          (equipo) => {
          return (this.equipo.country.toLowerCase.indexOf(val.toLowerCase())>-1)
        });
          //return.country.indexOf(val.toLowerCase()) > -1);
      })
      
    } 
  }*/
}
