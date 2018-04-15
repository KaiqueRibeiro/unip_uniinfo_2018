import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CursosProvider } from '../../providers/cursos/cursos';

import { CinfoPage } from '../cinfo/cinfo';

import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-lnoturno',
  templateUrl: 'lnoturno.html',
  
})
export class LnoturnoPage {

  courses: Observable<any>;
  
    constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private provider: CursosProvider) {
  
      this.courses = this.provider.getInfoC();
    }
  
    verCurso(cursos: any) {
      this.navCtrl.push('CinfoPage', { cursos: cursos });
    }

}
