import { Component, OnInit } from '@angular/core';
import { ConflictosLaboralesService } from '../service/conflictos-laborales.service';

@Component({
  selector: 'app-conflictos-laborales',
  templateUrl: './conflictos-laborales.page.html',
  styleUrls: ['./conflictos-laborales.page.scss'],
})
export class ConflictosLaboralesPage implements OnInit {

  constructor(private conflictosLaborales:ConflictosLaboralesService ) {
    this.fechaDeHoy(this.conflicto);
   }
  somethingChanged(value:any){
    
      console.log(value);
      
  }

  conflicto = { 
    medida: '',
    observacion: '',
    fecha:'',
    
  };

  saveData(form){
    this.conflictosLaborales.save(form);
  }
  ngOnInit() {
  }

  fechaDeHoy(conflicto){
    var f = new Date();
    var mesBien = '' + (f.getMonth() + 1);
    var diaBien = '' + f.getDate();
    var anioBien = f.getFullYear();
    if (mesBien.length < 2) mesBien = '0' + mesBien;
    if (diaBien.length < 2) diaBien = '0' + diaBien;
    var fechaFormatoCorrecto =  [anioBien, mesBien, diaBien].join('-');
    var fin = fechaFormatoCorrecto.toString();
    conflicto.fecha = fin;
    console.log(fechaFormatoCorrecto);
    console.log(fin);
  }

}
