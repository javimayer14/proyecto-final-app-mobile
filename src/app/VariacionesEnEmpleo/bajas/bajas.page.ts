import { Component, OnInit } from '@angular/core';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.page.html',
  styleUrls: ['./bajas.page.scss'],
})
export class BajasPage implements OnInit {

  range:any[] = [];
  x:any= 1;
  constructor( private variacioncesService: VariacionesLaboralesService) {
 
    for(this.x=1;this.x<=100;this.x++){
      this.range.push(this.x);
    }
    this.variacioncesService.fechaDeHoy(this.bajas);
   }
   bajas = {
    fecha:'',
    contrato: '',
    cantidad: '',
    motivo: '',
    observacion: '',
    
  };

  saveData(form){
    this.variacioncesService.saveBaja(form);
  }
  ngOnInit() {
  }

}
