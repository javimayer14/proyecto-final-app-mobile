import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'

@Component({
  selector: 'app-suspenciones',
  templateUrl: './suspenciones.page.html',
  styleUrls: ['./suspenciones.page.scss'],
})
export class SuspencionesPage implements OnInit {
  
  range:any[] = [];
  x:any= 1;
  constructor( private variacioncesService: VariacionesLaboralesService) {
 
   
   }

   suspenciones = {
    fecha: '',
    contrato: '',
    cantidad: '',
    motivo: '',
    observacion: '',
    
  };

  saveData(form){
   this.variacioncesService.saveSuspencion(form);
  }
  ngOnInit() {
    
    for(this.x=1;this.x<=100;this.x++){
      this.range.push(this.x);
    }
    
  }

}
