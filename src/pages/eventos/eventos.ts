import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventosProvider } from '../../providers/eventos/eventos';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  events: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider: EventosProvider) {
      
      this.events = this.provider.getAll();
  }

}
