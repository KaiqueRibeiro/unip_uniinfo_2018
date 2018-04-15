import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocaisProvider } from '../../providers/locais/locais';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-linfo',
  templateUrl: 'linfo.html',
})
export class LinfoPage {
  form: FormGroup;
  local: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  private formBuilder: FormBuilder,
private provider: LocaisProvider) {

  this.local = this.navParams.data.local || {};
  this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.local.key],
      ambiente: [this.local.ambiente],
      localizacao: [this.local.localizacao],
      horario: [this.local.horario],
      descricao: [this.local.descricao]
    })
  }

}
