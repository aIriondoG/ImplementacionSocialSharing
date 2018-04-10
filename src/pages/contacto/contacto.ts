import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  mensaje: '';
  listaComentarios: AngularFireList<any>;
  comentarios: Observable<any[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public database: AngularFireDatabase,
    public auth: AuthProvider,
    public alertCtrl: AlertController,
    private emailComposer: EmailComposer
  ) {
    console.log(this.auth.User);
    this.listaComentarios = this.database.list('Comentarios/');
    this.comentarios = this.listaComentarios.snapshotChanges();
  }
  enviarMensaje() {
    /*let email = {
      to: 'adrianiriondo96@gmail.com',
      subject: 'Problema o sugerencia del usuario:'+this.auth.User,
      body: this.mensaje,
      isHtml: false
    };
    this .emailComposer. isAvailable (). then ((disponible: boolean ) => {
      if (disponible) {
        // Ahora sabemos que podemos enviar       
        this.emailComposer.open(email);
      }else{
        console.log("No disponible email composer");
      }
     });*/
   
    this.listaComentarios.push({
      Usuario: this.auth.User,
      Mensaje: this.mensaje
    });
    let alert = this.alertCtrl.create({
      title: 'Mensaje enviado',
      buttons: ['Aceptar']
    });
    alert.present();
    this.navCtrl.push(HomePage, {
    });
  }
  
  contacto(event) {
    
    this.navCtrl.push(ContactoPage, {
      
    });
  
}

}
