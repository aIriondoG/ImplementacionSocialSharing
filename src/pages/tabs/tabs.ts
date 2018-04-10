import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { EquiposPage } from '../equipos/equipos';
import { PartidosPage } from '../partidos/partidos';
import { ClasificacionPage } from '../clasificacion/clasificacion';
import { ContactoPage } from '../contacto/contacto';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EquiposPage;
  tab3Root = PartidosPage;
  tab4Root = ClasificacionPage;
  tab5Root = ContactoPage;

  constructor() {

  }
}
