import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {
  pelicula:String;
  constructor(public navCtrl: NavController, private router: Router) { }
  VariacionesIr(){
    this.router.navigate(['/tabs/tab1']);
  }
  ConflictosIr(){
    this.navCtrl.navigateForward('/tabs/conflictos-laborales');
  }
  CambiosIr(){
    this.navCtrl.navigateForward('/tabs/cambio-condiciones-laborales');
  }
  ngOnInit() {
  }

}
