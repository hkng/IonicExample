import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Ionic2ApiPage } from '../pages/ionic2-api/ionic2-api';
import { Ionic2ApiDetailPage } from '../pages/ionic2-api-detail/ionic2-api-detail';
import { LoginPage } from './../pages/login/login';
import { BarcodePage } from './../pages/barcode/barcode';
import { VisionPage } from '../pages/vision/vision';
import { ScanPage } from '../pages/scan/scan';
import { ProjectsPage } from '../pages/projects/projects';
import { RegisterPage } from '../pages/register/register';
import { UnregisterPage } from '../pages/unregister/unregister';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  MainMenuItems: Array<MenuItem>;
  appMenuItems: Array<MenuItem>;
  helpMenuItems: Array<MenuItem>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.MainMenuItems = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Staff Directory', component: Ionic2ApiPage, icon: 'contact' },
      { title: 'Project Location', component: ProjectsPage, icon: 'paper' },
      { title: 'Activities', component: HomePage, icon: 'partly-sunny' },
    ];

    this.appMenuItems = [         
      { title: 'Warehouse', component: BarcodePage, icon: 'locate' },
      { title: 'Course attendance', component: BarcodePage, icon: 'list-box' },
      { title: 'Image Recognition', component: VisionPage, icon: 'reverse-camera' },
      { title: 'Scan', component: ScanPage, icon: 'reverse-camera' }
    ];

    this.helpMenuItems = [
      { title: 'Unregister', component: UnregisterPage, icon: 'create' },
      { title: 'Help', component: HomePage, icon: 'information-circle' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
