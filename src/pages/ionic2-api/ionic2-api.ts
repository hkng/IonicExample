import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Ionic2ApiDetailPage } from '../ionic2-api-detail/ionic2-api-detail';

/**
 * Generated class for the Ionic2ApiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ionic2-api',
  templateUrl: 'ionic2-api.html',
  providers: [ApiServiceProvider]
})
export class Ionic2ApiPage {
  public people: any;

  constructor(
     public navCtrl: NavController,
     public apiprovider: ApiServiceProvider) {
     this.loadPeople();
  }

  loadPeople() {
    this.apiprovider.load()
      .then(data1 => {
        this.people = data1;
      });
  }

  openDetail(person) {
    this.navCtrl.push(Ionic2ApiDetailPage, person);
}

}
