import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocaisProvider } from '../../providers/locais/locais';

import { LinfoPage } from '../linfo/linfo';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-locais',
  templateUrl: 'locais.html'
})
export class LocaisPage {

  places: Observable<any>;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private provider: LocaisProvider) {

    this.places = this.provider.getAll();

  }

  verLocal(local: any){
    this.navCtrl.push('LinfoPage', { local: local });
  }

}
