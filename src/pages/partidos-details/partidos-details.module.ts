import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartidosDetailsPage } from './partidos-details';

@NgModule({
  declarations: [
    PartidosDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PartidosDetailsPage),
  ],
})
export class PartidosDetailsPageModule {}
