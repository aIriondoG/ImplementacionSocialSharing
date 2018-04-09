import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipoDetailsPage } from './equipo-details';

@NgModule({
  declarations: [
    EquipoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipoDetailsPage),
  ],
})
export class EquipoDetailsPageModule {}
