import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the Ionic2ApiDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ionic2-api-detail',
  templateUrl: 'ionic2-api-detail.html',
})
export class Ionic2ApiDetailPage {

  person: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: ApiServiceProvider) {
      this.person = this.navParams.data;
      /*   service.findById(this.broker.id).then(
            broker => this.broker = broker 
        ); */
  }

}
