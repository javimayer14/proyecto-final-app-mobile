import { Component, OnInit } from '@angular/core';
import { ConflictosLaboralesService } from '../service/conflictos-laborales.service';

@Component({
  selector: 'app-conflictos-laborales',
  templateUrl: './conflictos-laborales.page.html',
  styleUrls: ['./conflictos-laborales.page.scss'],
})
export class ConflictosLaboralesPage implements OnInit {

  constructor(private conflictosLaborales:ConflictosLaboralesService ) { }
  somethingChanged(value:any){
    
      console.log(value);
  
  }

  conflicto = {
    motivo: '',
    medida: '',
    observacion: '',
    fecha:'',
    
  };

  saveData(form){
    this.conflictosLaborales.save(form);
  }
  ngOnInit() {
  }

}
