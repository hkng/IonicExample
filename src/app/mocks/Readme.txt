Ionic Native Mock
Reference
https://github.com/chrisgriffith/ionic-native-mocks

Auto-Switch Mock on Browser Debug and Real Device
1. Install ionic mock, npm install @ionic-native-mocks/[plug-in] --save
2. app.module.ts. Put just after all imports :
const isBrowser = document.URL.includes('https://') || document.URL.includes('http://');
3. app.module.ts, providers section
(isBrowser ? {provide : Camera, useClass : CameraMock} : Camera),
(isBrowser ? {provide : ImagePicker, useClass : ImagePickerMock} : ImagePicker),
(isBrowser ? {provide : Geolocation, useClass : GeolocationMock} : Geolocation),

Ionic Native Mock Installation
1. npm install @ionic-native-mocks/[plug-in] --save
   for barcodescanner, npm install @ionic-native-mocks/barcode-scanner --save
2. app.module.ts, add: import { BarcodeScannerMock } from '@ionic-native-mocks/barcode-scanner';
3. app.module.ts, within provider section, Change
    (isBrowser ? {provide : BarcodeScanner, useClass : BarcodeScannerMock} : BarcodeScanner),


Customize Ionic Native Mock
Reference
https://chrisgriffith.wordpress.com/2017/08/21/customizing-ionic-native-mocks/

1. Auto-Switch Mock on Browser Debug and Real Device
   In app.module.ts. Put just after all imports :
   const isBrowser = document.URL.includes('https://') || document.URL.includes('http://');

2. Create folder './src/app/mocks/barcodescanner'
3. Under 'barcodescanner' folder, Create index.ts file and copy the code from
   https://github.com/chrisgriffith/ionic-native-mocks/blob/master/src/%40ionic-native-mocks/plugins/barcode-scanner/index.ts
4. update your barcode scan result at index.ts as below
     scan(options?: BarcodeScannerOptions): Promise<BarcodeScanResult> {
         let code='QR-Code Scan OK!';
         let theResult: BarcodeScanResult = {format: 'QR_CODE', cancelled: false, text: code };
5. In app.module.ts, Change or update to: import { BarcodeScannerMock } from './mocks/barcodescanner';


Promise and observables Mock explanation
http://coenraets.org/blog/2016/02/angular2-ionic2-data-services-promises-observables/

