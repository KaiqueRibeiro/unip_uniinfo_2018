import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LnoturnoPage } from '../lnoturno/lnoturno';
import { LmatitunoPage } from '../lmatituno/lmatituno';

@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  constructor(public navCtrl: NavController) {

  }

  goToLnoturno(){
    this.navCtrl.push(LnoturnoPage)
  }

  goToLmatiturno(){
    this.navCtrl.push(LmatitunoPage)
  }

}
