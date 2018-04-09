import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//Importacion de paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EquiposPage } from '../pages/equipos/equipos';
import { PartidosPage } from '../pages/partidos/partidos';
import { EquipoDetailsPage } from '../pages/equipo-details/equipo-details';
import { PartidosDetailsPage } from '../pages/partidos-details/partidos-details';
import { TabsPage } from '../pages/tabs/tabs';
import {ClasificacionPage} from '../pages/clasificacion/clasificacion';
import {ClasificacionDetailsPage} from "../pages/clasificacion-details/clasificacion-details";
//Importacion de social sharing
import { SocialSharing } from '@ionic-native/social-sharing';
//Importacion de pipe/ordenar
import { SortPipe } from '../pipes/sort/sort';
//Importacion de AngularFireBase2 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//Exportacion de AngularFireBase2 Configuracion
export const config = {
  apiKey: "AIzaSyDdiLGK0Bpqxq-VKobt9XzxbxbPItIkDV0",
  authDomain: "mundialrusia-8590d.firebaseapp.com",
  databaseURL: "https://mundialrusia-8590d.firebaseio.com",
  projectId: "mundialrusia-8590d",
  storageBucket: "mundialrusia-8590d.appspot.com",
  messagingSenderId: "669376915713"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EquiposPage,
    PartidosPage,
    TabsPage,
    EquipoDetailsPage,
    PartidosDetailsPage,
    ClasificacionPage,
    ClasificacionDetailsPage,
    SortPipe

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EquiposPage,
    PartidosPage,
    TabsPage,
    EquipoDetailsPage,
    PartidosDetailsPage,
    ClasificacionPage,
    ClasificacionDetailsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
