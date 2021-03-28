import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-suspenciones',
  templateUrl: './suspenciones.page.html',
  styleUrls: ['./suspenciones.page.scss'],
})
export class SuspencionesPage implements OnInit {
  public pauseSpiner = true;
  public buttonDisable = false;
  constructor( private variacioncesService: VariacionesLaboralesService,  private router: Router) {
 
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
  async saveData(form){
  this.pauseSpiner = false
  this.buttonDisable= true;
  await this.variacioncesService.saveSuspencion(form);
  this.router.navigate(['/pagina-principal']);
  this.buttonDisable= false;
  this.pauseSpiner= true;
   
  }
  ngOnInit() {    
  }

}
