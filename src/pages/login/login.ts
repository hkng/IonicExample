import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

import { FingerprintAIO ,FingerprintOptions} from '@ionic-native/fingerprint-aio';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  fingerprintOptions : FingerprintOptions;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fingerAuth: FingerprintAIO,
    private storage: Storage) {
     
      // if no registed, go to register page
      storage.get('registerStatus').then((val)=> {
       console.log(val);
       if (val !='succeed')
        this.navCtrl.setRoot(RegisterPage);
      });      
  }

  // ionViewCanEnter(): boolean {
  //  // if ("A"=="B") {return true}   
  //    this.navCtrl.setRoot(RegisterPage);
  //    return false;
   
  // }

  public showFingerprintAuthDlg(){
    this.fingerprintOptions = {
        clientId: 'fingerprint-Demo',
        clientSecret: 'password', //Only necessary for Android
        disableBackup:true,  //Only for Android(optional)
        localizedFallbackTitle: 'Use Pin', //Only for iOS
        localizedReason: 'Please authenticate' //Only for iOS
    }
    this.fingerAuth.isAvailable().then(result =>{
      if(result === "OK")
       {
        this.fingerAuth.show(this.fingerprintOptions)
        .then((result: any) =>  this.navCtrl.setRoot(HomePage))
        .catch((error: any) => console.log(error));
       }
       if( result === undefined)
       {
         console.log("fingerprint is not available!");
         this.navCtrl.setRoot(HomePage);
       }
     });
}

}
