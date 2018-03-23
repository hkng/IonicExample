import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';



@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  scanText: string = '';

  constructor(public navCtrl: NavController,
             private barcodeScanner: BarcodeScanner,
             private toast: Toast,
             private toastCtrl: ToastController,
             public navParams: NavParams) {
  }

  showToastWithCloseButton(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.scanText = barcodeData.text;
      this.showToastWithCloseButton(barcodeData.text)
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  
  }

}
