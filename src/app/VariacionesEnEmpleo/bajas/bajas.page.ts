import { Component, OnInit } from '@angular/core';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.page.html',
  styleUrls: ['./bajas.page.scss'],
})
export class BajasPage implements OnInit {

  constructor(private variacioncesService: VariacionesLaboralesService) {

    this.variacioncesService.fechaDeHoy(this.bajas);
  }
  bajas = {
    fecha: '',
    contrato: '',
    cantidad: '',
    motivo: '',
    observacion: '',

  };

  // Pasa formulario para enviar a backEnd
  saveData(form) {
    this.variacioncesService.saveBaja(form);
  }

  ngOnInit() {
  }

}
