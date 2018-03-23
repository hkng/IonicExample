import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';


/**
 * Generated class for the UnregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unregister',
  templateUrl: 'unregister.html',
})
export class UnregisterPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage: Storage) {
      this.storage.set('registerStatus', 'failed');  
      this.navCtrl.setRoot(RegisterPage);

  }
 
}
