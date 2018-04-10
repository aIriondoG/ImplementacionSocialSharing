import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: GoogleMap;
  lt: number;
  lg: number;
  datos: any;
  nombre: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps ) {
    this.datos = navParams.get('local');
    this.nombre = navParams.get('nombre');
    for(let i=0; i<this.datos.length; i++){
      if(this.datos[i].Nombre == this.nombre){
        console.log("Lo es");
        this.lt=Number(this.datos[i].posicionX);
        this.lg=Number(this.datos[i].posicionY);
        console.log(this.lt+"--/\--"+this.lg);
      }else{
        console.log("No fue igual");
      }
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    this.loadMap();
  }
  //Metodo que crea la instancia del mapa
  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {//Default location
          lat: this.lt,
          lng: -this.lg
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

  }
  

}
