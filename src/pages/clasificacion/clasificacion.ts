import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
//Importacion de paginaas
import { ClasificacionDetailsPage } from '../clasificacion-details/clasificacion-details';
//Importacion de afb2
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { EquipoDetailsPage } from '../equipo-details/equipo-details';
//Importacion de ordenar
//import { Ordenar } from '../../app/pipes/miPipe';
import { AuthProvider } from '../../providers/auth/auth';
import { ContactoPage } from '../contacto/contacto';

//Implementacion
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-clasificacion',
  templateUrl: 'clasificacion.html',

})
export class ClasificacionPage {

  listaEquipos: AngularFireList<any>;
  equipo: Observable<any[]>;
  equipoA: any;
  items: any;
  falso: boolean;
  name: string = "";

  descending: boolean = false;
  order: number;
  column: String = 'name';
  //punteroPunt: number;
  verdadero: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    public loadingCtrl: LoadingController, 
    public auth: AuthProvider
  ) {
    this.falso = false;
    this.items = [];
    this.listaEquipos = this.afDatabase.list('/Equipos');
    this.equipo = this.listaEquipos.valueChanges();

    this.equipo.subscribe(
      (data) => {
        console.log(data);
        this.equipoA = data;
        console.log("Antes: " + this.equipoA);
        //this.cargaGrupos();
        this.equipoA.sort((a, b) => {


          if (a.points < b.points) {
            return 1;
          }
          else if (a.points > b.points) {
            return -1;
          }
          else {
            return 0;

          }

        }
        );
        //console.log("Despues: " + this.equipoA);
      }
    );
    



    //this.rellenoEquipoA();
    this.presentLoading();
    //this.cargaGrupos();


  }
  salir(){
    this.auth.logout();
  }
  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando grupos...",
      duration: 1500
    });
    loader.present();
  }
  itemTapped(event, e) {
    if (e != null) {
      this.navCtrl.push(EquipoDetailsPage, {
        equipos: e
      });
    } else {
      console.log("E = null");
    }
  }
  contacto(event) {
    
      this.navCtrl.push(ContactoPage, {  
      });
    
  }

}


