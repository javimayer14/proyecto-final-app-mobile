import { Component, OnInit } from '@angular/core';
import { ConflictosLaboralesService } from '../service/conflictos-laborales.service';

@Component({
  selector: 'app-conflictos-laborales',
  templateUrl: './conflictos-laborales.page.html',
  styleUrls: ['./conflictos-laborales.page.scss'],
})
export class ConflictosLaboralesPage implements OnInit {

  constructor(private conflictosLaborales: ConflictosLaboralesService) {
    this.fechaDeHoy(this.conflicto);
  }

  conflicto = {
    medida: '',
    observacion: '',
    fecha: '',

  };

  // Llama a servicio que manda data al backEnd (pasamanos)
  saveData(form) {
    this.conflictosLaborales.save(form);
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
