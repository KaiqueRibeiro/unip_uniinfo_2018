import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CinfoPage } from './cinfo';

@NgModule({
  declarations: [
    CinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CinfoPage),
  ],
})
export class CinfoPageModule {}
