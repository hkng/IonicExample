import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  createSuccess = false;
  registerCredentials = { username: '', password: '', passcode: '' };
  passcodeSubmitted = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtl: AlertController,
    private storage: Storage) {
  }

  showPopup(title, text) {
    let alert = this.alertCtl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  public showPasscodeDlg() {
    if (this.registerCredentials.password == '1234') {
    this.showPopup("Passcode Sent!",'Please check your mailbox');
    this.passcodeSubmitted = true;
    } else {
      this.showPopup("Fail!",'User name or Password not correct');
    }

  }

  public register() {
    if (this.passcodeSubmitted) {
      this.showPopup("Registration Completed!", "Welcome to Hip Hing App");
      this.createSuccess = true;   
      this.storage.set('registerStatus', 'succeed');  
      console.log('register ')
      this.navCtrl.setRoot(HomePage);
    } 
  }

}
