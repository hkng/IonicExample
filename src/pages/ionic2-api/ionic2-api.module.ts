import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2ApiPage } from './ionic2-api';

@NgModule({
  declarations: [
    Ionic2ApiPage,
  ],
  imports: [
    IonicPageModule.forChild(Ionic2ApiPage),
  ],
})
export class Ionic2ApiPageModule {}
