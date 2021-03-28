import { Component, OnInit } from '@angular/core';
import { ConflictosLaboralesService } from '../service/conflictos-laborales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conflictos-laborales',
  templateUrl: './conflictos-laborales.page.html',
  styleUrls: ['./conflictos-laborales.page.scss'],
})
export class ConflictosLaboralesPage implements OnInit {
  public pauseSpiner = true;
  public buttonDisable = false;
  constructor(private conflictosLaborales: ConflictosLaboralesService,  private router: Router) {
    this.fechaDeHoy(this.conflicto);
  }

  conflicto = {
    medida: '',
    observacion: '',
    fecha: '',

  };

  // Llama a servicio que manda data al backEnd (pasamanos)
  async saveData(form) {
    this.pauseSpiner = false
    this.buttonDisable= true;
    await this.conflictosLaborales.save(form);
    this.router.navigate(['/pagina-principal']);
    this.buttonDisable= false;
    this.pauseSpiner= true; 
  }
  ngOnInit() {
  }

  //Carga la fecha actual en formato correcto
  fechaDeHoy(conflicto) {
    var f = new Date();
    var mesBien = '' + (f.getMonth() + 1);
    var diaBien = '' + f.getDate();
    var anioBien = f.getFullYear();
    if (mesBien.length < 2) mesBien = '0' + mesBien;
    if (diaBien.length < 2) diaBien = '0' + diaBien;
    var fechaFormatoCorrecto = [anioBien, mesBien, diaBien].join('-');
    var fin = fechaFormatoCorrecto.toString();
    conflicto.fecha = fin;

  }

}
