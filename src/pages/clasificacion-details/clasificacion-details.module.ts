import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClasificacionDetailsPage } from './clasificacion-details';

@NgModule({
  declarations: [
    ClasificacionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClasificacionDetailsPage),
  ],
})
export class ClasificacionDetailsPageModule {}
