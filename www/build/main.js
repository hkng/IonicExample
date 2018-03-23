webpackJsonp([8],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtl = alertCtl;
        this.storage = storage;
        this.createSuccess = false;
        this.registerCredentials = { username: '', password: '', passcode: '' };
        this.passcodeSubmitted = false;
    }
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.showPasscodeDlg = function () {
        if (this.registerCredentials.password == '1234') {
            this.showPopup("Passcode Sent!", 'Please check your mailbox');
            this.passcodeSubmitted = true;
        }
        else {
            this.showPopup("Fail!", 'User name or Password not correct');
        }
    };
    RegisterPage.prototype.register = function () {
        if (this.passcodeSubmitted) {
            this.showPopup("Registration Completed!", "Welcome to Hip Hing App");
            this.createSuccess = true;
            this.storage.set('registerStatus', 'succeed');
            console.log('register ');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\register\register.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>register</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n        <ion-row>\n            <ion-col>\n                <ion-list inset>\n\n                    <ion-item>\n                        <ion-input type="text" placeholder="User Name" name="username" [(ngModel)]="registerCredentials.username" required></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-input type="password" placeholder="Password (e.g. 1234)" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col class="signup-col">\n                <button ion-button (click)="showPasscodeDlg()" [disabled]="passcodeSubmitted">Submit</button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-list inset>\n                    <ion-item>\n                        <ion-input type="number" placeholder="Passcode (e.g. 1234)" name="passcode" [(ngModel)]="registerCredentials.passcode" required></ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class="signup-col">\n                <!-- <button ion-button full (click)="register()" [disabled]="!passcodeSubmitted">Register</button> -->\n                <button ion-button class="submit-btn" type="submit" [disabled]="!passcodeSubmitted">Register</button>\n            </ion-col>\n        </ion-row>\n\n    </form>\n</ion-content>'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(http) {
        this.http = http;
        console.log('Hello ApiServiceProvider Provider');
    }
    ApiServiceProvider.prototype.load = function () {
        var _this = this;
        if (this.data1) {
            // already loaded data
            return Promise.resolve(this.data1);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('https://randomuser.me/api/?results=10')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data1 = data.results;
                console.log(_this.data1);
                //this.data1 = Array.of(this.data1);
                resolve(_this.data1);
            });
        });
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarcodePage = /** @class */ (function () {
    function BarcodePage(navCtrl, barcodeScanner, toast, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.scanText = '';
    }
    BarcodePage.prototype.showToastWithCloseButton = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    BarcodePage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scanText = barcodeData.text;
            _this.showToastWithCloseButton(barcodeData.text);
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    BarcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-barcode',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\barcode\barcode.html"*/'<!-- Side Menu -->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>BarcodeScanner</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <h1>\n    <button ion-button color="dark" full round (click)="this.scan()">Start Scan</button>\n  </h1>\n</ion-content>\n'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\barcode\barcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BarcodePage);
    return BarcodePage;
}());

//# sourceMappingURL=barcode.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2ApiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_api_detail_ionic2_api_detail__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Ionic2ApiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Ionic2ApiPage = /** @class */ (function () {
    function Ionic2ApiPage(navCtrl, apiprovider) {
        this.navCtrl = navCtrl;
        this.apiprovider = apiprovider;
        this.loadPeople();
    }
    Ionic2ApiPage.prototype.loadPeople = function () {
        var _this = this;
        this.apiprovider.load()
            .then(function (data1) {
            _this.people = data1;
        });
    };
    Ionic2ApiPage.prototype.openDetail = function (person) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ionic2_api_detail_ionic2_api_detail__["a" /* Ionic2ApiDetailPage */], person);
    };
    Ionic2ApiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ionic2-api',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\ionic2-api\ionic2-api.html"*/'<!-- Side Menu -->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Api Demo</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="home">\n    <ion-list>\n        <button ion-item *ngFor="let person of people" (click)="openDetail(person)">\n          <ion-avatar item-left>\n              <img src="{{person.picture.thumbnail}}"/>\n          </ion-avatar>\n          <h2>{{person.name.first}} {{person.name.last}}</h2>\n          <p>{{person.email}}</p>\n      </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\ionic2-api\ionic2-api.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], Ionic2ApiPage);
    return Ionic2ApiPage;
}());

//# sourceMappingURL=ionic2-api.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2ApiDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Ionic2ApiDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Ionic2ApiDetailPage = /** @class */ (function () {
    function Ionic2ApiDetailPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.person = this.navParams.data;
        /*   service.findById(this.broker.id).then(
              broker => this.broker = broker
          ); */
    }
    Ionic2ApiDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ionic2-api-detail',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\ionic2-api-detail\ionic2-api-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Person Detail</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="persondetail">\n\n    <ion-card>\n        <ion-card-content>\n            <img src="{{person.picture.large}}" />\n            <h2>{{person.name.first}} {{person.name.last}}</h2>\n            <h3>{{person.gender}}</h3>\n        </ion-card-content>\n\n        <ion-list>\n            <a href="tel:{{person.cell}}" ion-item>\n                <ion-icon name="call" item-left></ion-icon>\n                <p>Call Mobile</p>\n                <h2>{{person.cell}}</h2>\n            </a>\n            <a href="mailto:{{person.email}}" ion-item>\n                <ion-icon name="mail" item-left></ion-icon>\n                <p>Email</p>\n                <h2>{{person.email}}</h2>\n            </a>\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\ionic2-api-detail\ionic2-api-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], Ionic2ApiDetailPage);
    return Ionic2ApiDetailPage;
}());

//# sourceMappingURL=ionic2-api-detail.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fingerAuth, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fingerAuth = fingerAuth;
        this.storage = storage;
        // if no registed, go to register page
        storage.get('registerStatus').then(function (val) {
            console.log(val);
            if (val != 'succeed')
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        });
    }
    // ionViewCanEnter(): boolean {
    //  // if ("A"=="B") {return true}   
    //    this.navCtrl.setRoot(RegisterPage);
    //    return false;
    // }
    LoginPage.prototype.showFingerprintAuthDlg = function () {
        var _this = this;
        this.fingerprintOptions = {
            clientId: 'fingerprint-Demo',
            clientSecret: 'password',
            disableBackup: true,
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Please authenticate' //Only for iOS
        };
        this.fingerAuth.isAvailable().then(function (result) {
            if (result === "OK") {
                _this.fingerAuth.show(_this.fingerprintOptions)
                    .then(function (result) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); })
                    .catch(function (error) { return console.log(error); });
            }
            if (result === undefined) {
                console.log("fingerprint is not available!");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="showFingerprintAuthDlg()">Login</button>\n</ion-content>\n'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
        this.loadmap();
    };
    ProjectsPage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 20
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 17
        }).on('locationfound', function (e) {
            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([e.latitude, e.longitude]).bindPopup('Your Location');
            var hc201705 = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([22.3145, 114.2163]).bindPopup('HC201705 - Redevelopment of Hoi Bun Road');
            markerGroup.addLayer(marker);
            markerGroup.addLayer(hc201705);
            _this.map.addLayer(markerGroup);
        }).on('locationerror', function (err) {
            alert(err.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProjectsPage.prototype, "mapContainer", void 0);
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\projects\projects.html"*/'<!-- Side Menu -->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Project Location</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div id="map" style="width:100%; height:100%;"></div>\n</ion-content>'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\projects\projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnregisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UnregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnregisterPage = /** @class */ (function () {
    function UnregisterPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.set('registerStatus', 'failed');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__register_register__["a" /* RegisterPage */]);
    }
    UnregisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-unregister',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\unregister\unregister.html"*/'<!--\n  Generated template for the UnregisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>unregister</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\unregister\unregister.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], UnregisterPage);
    return UnregisterPage;
}());

//# sourceMappingURL=unregister.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VisionPage = /** @class */ (function () {
    function VisionPage(storage, afs, camera, loadingCtrl) {
        this.storage = storage;
        this.afs = afs;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create({
            content: 'Running AI vision analysis....'
        });
    }
    VisionPage.prototype.startUpload = function (file) {
        var _this = this;
        // Show loader
        this.loading.present();
        // const timestamp = new Date().getTime().toString();
        var docId = this.afs.createId();
        var path = docId + ".jpg";
        // Make a reference to the future location of the firestore document
        var photoRef = this.afs.collection('photos').doc(docId);
        // Firestore observable
        this.result$ = photoRef.valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["filter"])(function (data) { return !!data; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (_) { return _this.loading.dismiss(); }));
        // The main task
        // this.image = 'data:image/jpg;base64,' + file;
        this.image = file;
        this.task = this.storage.ref(path).putString(this.image, 'data_url');
    };
    // Gets the pic from the native camera then starts the upload
    //async captureAndUpload() {
    VisionPage.prototype.captureAndUpload = function () {
        var _this = this;
        var options = {
            quality: 5,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        // const base64 = await this.camera.getPicture(options)
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.startUpload(base64Image);
        }, function (err) {
            // Handle error
        });
    };
    VisionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vision',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\vision\vision.html"*/'<!-- Side Menu -->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Vision</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-row>\n        <ion-col col-12 text-center>\n          <button ion-button icon-start (tap)="captureAndUpload()">\n            <ion-icon name="camera"></ion-icon>\n            Activate Cloud Vision\n          </button>\n        </ion-col>\n        <ion-col col-12>\n            <img width="100%" height="auto" [src]="image">\n        </ion-col>\n        <ion-col *ngIf="result$ | async as result">\n          <h3>Hotdog?</h3>\n          <button *ngIf="result.hotdog"\n                    color="secondary"ion-button full>\n            Hotdog!!!\n          </button>\n          <button *ngIf="!result.hotdog"\n                    color="danger"ion-button full>\n            Not Hotdog :)\n          </button>\n\n          <h3>Labels</h3>\n\n          <ion-chip color="secondary"\n                  *ngFor="let label of result.labels">\n\n                  <ion-label>{{ label }}</ion-label>\n\n          </ion-chip>\n\n        </ion-col>\n      </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\vision\vision.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], VisionPage);
    return VisionPage;
}());

//# sourceMappingURL=vision.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/barcode/barcode.module": [
		586,
		7
	],
	"../pages/ionic2-api-detail/ionic2-api-detail.module": [
		588,
		6
	],
	"../pages/ionic2-api/ionic2-api.module": [
		587,
		5
	],
	"../pages/login/login.module": [
		589,
		4
	],
	"../pages/projects/projects.module": [
		590,
		3
	],
	"../pages/register/register.module": [
		591,
		2
	],
	"../pages/unregister/unregister.module": [
		592,
		1
	],
	"../pages/vision/vision.module": [
		593,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = /** @class */ (function () {
    function ScanPage(ngZone, navCtrl, navParams, qrScanner, toast, toastCtrl, el, renderer) {
        var _this = this;
        this.ngZone = ngZone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.toast = toast;
        this.toastCtrl = toastCtrl;
        this.el = el;
        this.renderer = renderer;
        this.scanstatus = true;
        this.getcodestatus = false;
        this.counter = 0;
        // Make QR Scanner ready    
        /* this.qrScanner.prepare().then((status: QRScannerStatus) => {
          if (status.authorized){
            this.getcodestatus = true;
          }
        }); */
        this.qrScanner.prepare();
        this.ngZone = ngZone;
        renderer.listenGlobal('document', 'volumeupbutton', function (event) {
            // Do something with 'event'
            // alert('volumeupbutton');
            _this.getcodeFunc();
        });
        renderer.listenGlobal('document', 'volumedownbutton', function (event) {
            // Do something with 'event'
            //  alert('volumedownbutton');
            _this.getcodeFunc();
        });
    }
    ScanPage.prototype.scanFunc = function () {
        //alert(this.scanstatus+"\n"+this.getcodestatus);
        this.counter = 0;
        this.scanstatus = false;
        this.getcodestatus = true;
        this.qrScanner.show();
        this.qrScanner.getStatus().then(function (obj) {
            //alert('Previewing: ' + obj.previewing + '\nScannig: ' + obj.scanning + '\nShowing: ' + obj.showing);
        });
    };
    ScanPage.prototype.getcodeFunc = function () {
        var _this = this;
        console.log("getcodeFunc");
        var scanSub = this.qrScanner.scan().subscribe(function (text) {
            console.log('Scanned something: ' + text);
            console.log(_this.counter);
            _this.showToast(text + ':' + _this.counter.toString());
            _this.ngZone.run(function () {
                _this.counter = _this.counter + 1;
                console.log(_this.counter);
                if (_this.counter == 2) {
                    _this.qrScanner.hide(); // hide camera preview
                    _this.scanstatus = true;
                    _this.getcodestatus = false;
                }
            });
            scanSub.unsubscribe(); // stop scanning
        });
    };
    ScanPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: false,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\scan\scan.html"*/'<!--\n  Generated template for the ScanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>scan</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen class="backgroundColor">\n    <div class="codebannerCls" id="codebanner">\n\n    </div>\n\n    <button *ngIf="this.scanstatus" ion-button full outline (click)=\'scanFunc()\' id="btnScan">Scan</button>\n    <button *ngIf="getcodestatus" ion-button full outline (click)=\'getcodeFunc()\' id="btnGetCode">Get Code</button>\n\n</ion-content>'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\scan\scan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_barcodescanner__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_toast__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mocks_camera_index__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_fingerprint_aio__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mocks_fingerprint_index__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_qr_scanner__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__mocks_qrscanner_index__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_ionic2_api_ionic2_api__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_ionic2_api_detail_ionic2_api_detail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_barcode_barcode__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_vision_vision__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_scan_scan__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_projects_projects__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_unregister_unregister__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// For Ionic2-Api Demo



// For BarcodeScanner Demo



// For Vision Demo





// For Fingerprint


// For Scan page


// For GPS, Localstorage













// For Mock plugin detection. Refer to:
// https://chrisgriffith.wordpress.com/2017/08/21/customizing-ionic-native-mocks/
var isBrowser = document.URL.includes('https://') || document.URL.includes('http://');
// Firebase config file
var firebaseConfig = {
    apiKey: "AIzaSyAOqwT29eOQpn3cULicLRt9wlp9tgKZqZQ",
    authDomain: "ionicvisionapp-b0897.firebaseapp.com",
    databaseURL: "https://ionicvisionapp-b0897.firebaseio.com",
    projectId: "ionicvisionapp-b0897",
    storageBucket: "ionicvisionapp-b0897.appspot.com",
    messagingSenderId: "1078697271285"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ionic2_api_ionic2_api__["a" /* Ionic2ApiPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_ionic2_api_detail_ionic2_api_detail__["a" /* Ionic2ApiDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_barcode_barcode__["a" /* BarcodePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_vision_vision__["a" /* VisionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_scan_scan__["a" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_unregister_unregister__["a" /* UnregisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/barcode/barcode.module#BarcodePageModule', name: 'BarcodePage', segment: 'barcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic2-api/ionic2-api.module#Ionic2ApiPageModule', name: 'Ionic2ApiPage', segment: 'ionic2-api', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic2-api-detail/ionic2-api-detail.module#Ionic2ApiDetailPageModule', name: 'Ionic2ApiDetailPage', segment: 'ionic2-api-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unregister/unregister.module#UnregisterPageModule', name: 'UnregisterPage', segment: 'unregister', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vision/vision.module#VisionPageModule', name: 'VisionPage', segment: 'vision', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ionic2_api_ionic2_api__["a" /* Ionic2ApiPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_ionic2_api_detail_ionic2_api_detail__["a" /* Ionic2ApiDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_barcode_barcode__["a" /* BarcodePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_vision_vision__["a" /* VisionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_scan_scan__["a" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_unregister_unregister__["a" /* UnregisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                // Select BarCodeScanner mocks or native plugin
                (isBrowser ? { provide: __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], useClass: __WEBPACK_IMPORTED_MODULE_9__mocks_barcodescanner__["a" /* BarcodeScannerMock */] } : __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]),
                (isBrowser ? { provide: __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */], useClass: __WEBPACK_IMPORTED_MODULE_15__mocks_camera_index__["a" /* CameraMock */] } : __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */]),
                (isBrowser ? { provide: __WEBPACK_IMPORTED_MODULE_16__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */], useClass: __WEBPACK_IMPORTED_MODULE_17__mocks_fingerprint_index__["a" /* FingerprintAIOMock */] } : __WEBPACK_IMPORTED_MODULE_16__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]),
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                (isBrowser ? { provide: __WEBPACK_IMPORTED_MODULE_18__ionic_native_qr_scanner__["a" /* QRScanner */], useClass: __WEBPACK_IMPORTED_MODULE_19__mocks_qrscanner_index__["a" /* QRScannerMock */] } : __WEBPACK_IMPORTED_MODULE_18__ionic_native_qr_scanner__["a" /* QRScanner */])
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeScannerMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(143);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BarcodeScannerMock = /** @class */ (function (_super) {
    __extends(BarcodeScannerMock, _super);
    function BarcodeScannerMock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        return _this;
    }
    /**
       * Open the barcode scanner.
       * @param options {BarcodeScannerOptions} Optional options to pass to the scanner
       * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
       */
    BarcodeScannerMock.prototype.scan = function (options) {
        '';
        var code = 'BarCode Scan OK!';
        var theResult = { format: 'QR_CODE', cancelled: false, text: code };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    /**
       * Encodes data into a barcode.
       * NOTE: not well supported on Android
       * @param type {string} Type of encoding
       * @param data {any} Data to encode
       * @returns {Promise<any>}
       */
    BarcodeScannerMock.prototype.encode = function (type, data) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return BarcodeScannerMock;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(173);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CameraMock = /** @class */ (function (_super) {
    __extends(CameraMock, _super);
    function CameraMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    CameraMock.prototype.getPicture = function (options) {
        return new Promise(function (resolve, reject) {
            resolve("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");
        });
    };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    CameraMock.prototype.cleanup = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return CameraMock;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FingerprintAIOMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_fingerprint_aio__ = __webpack_require__(147);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FingerprintAIOMock = /** @class */ (function (_super) {
    __extends(FingerprintAIOMock, _super);
    function FingerprintAIOMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if fingerprint authentication is available
     * @return {Promise<any>} Returns a promise with result
     */
    FingerprintAIOMock.prototype.isAvailable = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show authentication dialogue
     * @param options {FingerprintOptions} options for platform specific fingerprint API
     * @return {Promise<any>} Returns a promise that resolves when authentication was successfull
     */
    FingerprintAIOMock.prototype.show = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return FingerprintAIOMock;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRScannerMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_qr_scanner__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QRScannerMock = /** @class */ (function (_super) {
    __extends(QRScannerMock, _super);
    function QRScannerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Request permission to use QR scanner.
     * @return {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.prepare = function () {
        var response;
        // Mock authroized = true;
        response = { authorized: true,
            denied: false,
            restricted: false,
            prepared: false,
            showing: false,
            scanning: false,
            previewing: false,
            lightEnabled: false,
            canOpenSettings: true,
            canEnableLight: true,
            canChangeCamera: true,
            currentCamera: 1 };
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.
     * @return {Observable<string>} returns an Observable that emits the scanned text. Unsubscribe from the observable to stop scanning.
     */
    QRScannerMock.prototype.scan = function () {
        var response;
        response = 'Scan OK';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.
     * @returns {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.show = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Configures the native webview to be opaque with a white background, covering the video preview.
     * @returns {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.hide = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Enable the device's light (for scanning in low-light environments).
     * @returns {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.enableLight = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Disable the device's light.
     * @return {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.disableLight = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Use front camera
     * @return {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.useFrontCamera = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Use back camera
     * @return {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.useBackCamera = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Set camera to be used.
     * @param camera {number} Provide `0` for back camera, and `1` for front camera.
     * @return {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.useCamera = function (camera) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Pauses the video preview on the current frame and pauses scanning.
     * @return {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.pausePreview = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Resumse the video preview and resumes scanning.
     * @return {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.resumePreview = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Returns permission status
     * @return {Promise<QRScannerStatus>}
     */
    QRScannerMock.prototype.getStatus = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Opens settings to edit app permissions.
     */
    QRScannerMock.prototype.openSettings = function () { };
    ;
    QRScannerMock.prototype.unsubscribe = function () { };
    ;
    return QRScannerMock;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_qr_scanner__["a" /* QRScanner */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ionic2_api_ionic2_api__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_barcode_barcode__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_vision_vision__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_scan_scan__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_projects_projects__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_unregister_unregister__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.MainMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Staff Directory', component: __WEBPACK_IMPORTED_MODULE_5__pages_ionic2_api_ionic2_api__["a" /* Ionic2ApiPage */], icon: 'contact' },
            { title: 'Project Location', component: __WEBPACK_IMPORTED_MODULE_10__pages_projects_projects__["a" /* ProjectsPage */], icon: 'paper' },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'partly-sunny' },
        ];
        this.appMenuItems = [
            { title: 'Warehouse', component: __WEBPACK_IMPORTED_MODULE_7__pages_barcode_barcode__["a" /* BarcodePage */], icon: 'locate' },
            { title: 'Course attendance', component: __WEBPACK_IMPORTED_MODULE_7__pages_barcode_barcode__["a" /* BarcodePage */], icon: 'list-box' },
            { title: 'Image Recognition', component: __WEBPACK_IMPORTED_MODULE_8__pages_vision_vision__["a" /* VisionPage */], icon: 'reverse-camera' },
            { title: 'Scan', component: __WEBPACK_IMPORTED_MODULE_9__pages_scan_scan__["a" /* ScanPage */], icon: 'reverse-camera' }
        ];
        this.helpMenuItems = [
            { title: 'Unregister', component: __WEBPACK_IMPORTED_MODULE_11__pages_unregister_unregister__["a" /* UnregisterPage */], icon: 'create' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <ion-list-header>\n                Main\n            </ion-list-header>\n            <button menuClose ion-item *ngFor="let menuItem of MainMenuItems" (click)="openPage(menuItem)">\n                <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n                {{menuItem.title}}\n              </button>\n        </ion-list>\n        <ion-list>\n            <ion-list-header>\n                Application\n            </ion-list-header>\n            <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n              <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n              {{menuItem.title}}\n            </button>\n        </ion-list>\n        <ion-list>\n            <ion-list-header>\n                Help\n            </ion-list-header>\n            <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n                <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n                {{menuItem.title}}\n              </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Development\Android\IonicExamples\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Welcome Hip Hing App Demo</h3>\n\n\n</ion-content>'/*ion-inline-end:"C:\Development\Android\IonicExamples\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map