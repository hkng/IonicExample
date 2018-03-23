import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// For Ionic2-Api Demo
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http'
import { ApiServiceProvider } from '../providers/api-service/api-service';

// For BarcodeScanner Demo
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BarcodeScannerMock } from './mocks/barcodescanner'
import { Toast } from '@ionic-native/toast';

// For Vision Demo
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { Camera } from '@ionic-native/camera';
import { CameraMock } from './mocks/camera/index';

// For Fingerprint
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { FingerprintAIOMock } from './mocks/fingerprint/index';

// For Scan page
import { QRScanner, QRScannerStatus }  from '@ionic-native/qr-scanner';
import { QRScannerMock }  from './mocks/qrscanner/index' ;

// For GPS, Localstorage
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';



import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Ionic2ApiPage } from '../pages/ionic2-api/ionic2-api';
import { Ionic2ApiDetailPage } from '../pages/ionic2-api-detail/ionic2-api-detail';
import { BarcodePage } from './../pages/barcode/barcode';
import { VisionPage } from '../pages/vision/vision';
import { ScanPage } from '../pages/scan/scan';
import { ProjectsPage } from '../pages/projects/projects';
import { RegisterPage } from '../pages/register/register';
import { UnregisterPage } from '../pages/unregister/unregister';


// For Mock plugin detection. Refer to:
// https://chrisgriffith.wordpress.com/2017/08/21/customizing-ionic-native-mocks/

const isBrowser = document.URL.includes('https://') || document.URL.includes('http://');

// Firebase config file
const firebaseConfig = {
  apiKey: "AIzaSyAOqwT29eOQpn3cULicLRt9wlp9tgKZqZQ",
   authDomain: "ionicvisionapp-b0897.firebaseapp.com",
   databaseURL: "https://ionicvisionapp-b0897.firebaseio.com",
   projectId: "ionicvisionapp-b0897",
   storageBucket: "ionicvisionapp-b0897.appspot.com",
   messagingSenderId: "1078697271285"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Ionic2ApiPage,
    Ionic2ApiDetailPage,
    LoginPage,
    BarcodePage,
    VisionPage,
    ScanPage,
    ProjectsPage,
    RegisterPage,
    UnregisterPage 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Ionic2ApiPage,
    Ionic2ApiDetailPage,
    LoginPage,
    BarcodePage,
    VisionPage,
    ScanPage,
    ProjectsPage,
    RegisterPage,
    UnregisterPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // Select BarCodeScanner mocks or native plugin
    (isBrowser ? {provide : BarcodeScanner, useClass : BarcodeScannerMock} : BarcodeScanner),
    (isBrowser ? {provide : Camera, useClass : CameraMock} : Camera),
    (isBrowser ? {provide : FingerprintAIO, useClass : FingerprintAIOMock} : FingerprintAIO),
    Toast,
    ApiServiceProvider,
    Geolocation,
    (isBrowser ? {provide : QRScanner, useClass : QRScannerMock} : QRScanner)
  ]
})
export class AppModule {}
