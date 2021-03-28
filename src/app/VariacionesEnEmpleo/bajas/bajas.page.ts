import { Component, OnInit } from '@angular/core';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.page.html',
  styleUrls: ['./bajas.page.scss'],
})
export class BajasPage implements OnInit {
  public pauseSpiner = true;
  public buttonDisable = false;
  constructor(private variacioncesService: VariacionesLaboralesService,  private router: Router) {

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
  async saveData(form) {
    this.pauseSpiner = false
    this.buttonDisable= true;
    await this.variacioncesService.saveBaja(form);
    this.router.navigate(['/pagina-principal']);
    this.buttonDisable= false;
    this.pauseSpiner= true;

  }

  ngOnInit() {
  }

}
