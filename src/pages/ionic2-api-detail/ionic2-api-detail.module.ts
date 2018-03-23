import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2ApiDetailPage } from './ionic2-api-detail';

@NgModule({
  declarations: [
    Ionic2ApiDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(Ionic2ApiDetailPage),
  ],
})
export class Ionic2ApiDetailPageModule {}
