import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
//Implementacion de proveedor de autentificaciones
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  user= { email : '', password : ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider,
    public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
 
  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      console.log("El usuario se ha creado correctamente");
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }
  login()
{
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }

}
