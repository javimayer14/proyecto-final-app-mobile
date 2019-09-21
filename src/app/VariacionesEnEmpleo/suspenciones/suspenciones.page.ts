import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'

@Component({
  selector: 'app-suspenciones',
  templateUrl: './suspenciones.page.html',
  styleUrls: ['./suspenciones.page.scss'],
})
export class SuspencionesPage implements OnInit {

  constructor( private variacioncesService: VariacionesLaboralesService) {
 
    this.variacioncesService.fechaDeHoy(this.suspenciones);

   }

   suspenciones = {
    fecha: '',
    contrato: '',
    cantidad: '',
    motivo: '',
    observacion: '',
    
  };

  // Pasa formulario para enviar a backEnd
  saveData(form){
   this.variacioncesService.saveSuspencion(form);
  }
  ngOnInit() {    
  }

}
