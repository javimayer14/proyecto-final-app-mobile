import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public navCtrl: NavController) {

  }
  AltasIr(){
    this.navCtrl.navigateForward('tabs/tab1/altas');
  }
  BajasIr(){
    this.navCtrl.navigateForward('tabs/tab1/bajas');
  }
  SuspencionesIr(){
    this.navCtrl.navigateForward('tabs/tab1/suspenciones');
  }
}
