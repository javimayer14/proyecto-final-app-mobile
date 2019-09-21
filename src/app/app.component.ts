import { Component } from '@angular/core';

import { Platform,ModalController,ActionSheetController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private ModalController: ModalController,
    private actionSheetController:ActionSheetController

    
   
  ) {
    this.initializeApp();
    console.log("laputamadre");

    this.platform.backButton.subscribe(async() => {

      try {
        const element = await this.actionSheetController.getTop();
        if (element) {
            element.dismiss();
            return;
        }
    } catch (error) {
    }
      this.ModalController.dismiss();
      console.log("laputamadre");
  })
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.navCtrl.navigateRoot('/login');
      
    });
  }
}
