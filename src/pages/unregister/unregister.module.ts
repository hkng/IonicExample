import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnregisterPage } from './unregister';

@NgModule({
  declarations: [
    UnregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(UnregisterPage),
  ],
})
export class UnregisterPageModule {}
