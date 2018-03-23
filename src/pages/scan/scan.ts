import { Component, ElementRef, Renderer, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { QRScannerMock }  from '../../app/mocks/qrscanner/index' ;
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  scanstatus: boolean = true;
  getcodestatus: boolean = false;
  counter: number = 0;
  constructor(
      private ngZone: NgZone, 
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private qrScanner: QRScanner, 
      private toast: Toast,
      private toastCtrl: ToastController,
      public el: ElementRef, 
      public renderer: Renderer) {   
    
    // Make QR Scanner ready    
    /* this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized){
        this.getcodestatus = true;
      } 
    }); */
    this.qrScanner.prepare();
    
    this.ngZone = ngZone;
    renderer.listenGlobal('document', 'volumeupbutton', (event) => {
      // Do something with 'event'
      // alert('volumeupbutton');
      this.getcodeFunc();
    });

    renderer.listenGlobal('document', 'volumedownbutton', (event) => {
      // Do something with 'event'
      //  alert('volumedownbutton');
      this.getcodeFunc();
    });
  }

  scanFunc() {
    //alert(this.scanstatus+"\n"+this.getcodestatus);
    this.counter = 0;
    this.scanstatus = false;
    this.getcodestatus = true;
    this.qrScanner.show();
    this.qrScanner.getStatus().then(function (obj) {
      //alert('Previewing: ' + obj.previewing + '\nScannig: ' + obj.scanning + '\nShowing: ' + obj.showing);
    }); 

  }
  getcodeFunc() {
    console.log("getcodeFunc")
      
   let scanSub = this.qrScanner.scan().subscribe((text: string) => {
     console.log('Scanned something: ' +  text);
     console.log(this.counter);    
     this.showToast(text + ':' + this.counter.toString());     
       this.ngZone.run(() => {
        this.counter = this.counter + 1;
        console.log(this.counter); 
        if (this.counter == 2) {
          this.qrScanner.hide(); // hide camera preview
          this.scanstatus = true;
          this.getcodestatus = false;
  
        }
      });      
      scanSub.unsubscribe(); // stop scanning
    }); 
  
  }
  
  showToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: false,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
