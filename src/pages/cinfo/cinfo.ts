import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CursosProvider } from '../../providers/cursos/cursos';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cinfo',
  templateUrl: 'cinfo.html',
})
export class CinfoPage {
  form: FormGroup;
  cursos: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private provider: CursosProvider) {

      this.cursos = this.navParams.data.cursos || {};
      this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.cursos.key],
      turno: [this.cursos.turno],
      curso: [this.cursos.curso],
      semestre: [this.cursos.semestre],
      sseg: [this.cursos.sseg],
      ster: [this.cursos.ster],
      squa: [this.cursos.squa],
      squi: [this.cursos.squi],
      ssex: [this.cursos.ssex]
    })    
  }

}
