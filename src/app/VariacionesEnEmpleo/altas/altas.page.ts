import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'

@Component({
  selector: 'app-altas',
  templateUrl: './altas.page.html',
  styleUrls: ['./altas.page.scss'],
})
export class AltasPage implements OnInit {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  myForm: FormGroup;
  range:any[] = [];
  x:any= 1;
  data: Observable<any>;
  constructor(public formBuilder: FormBuilder, public http: HttpClient, private variacioncesService: VariacionesLaboralesService) {
    for(this.x=1;this.x<=100;this.x++){
      this.range.push(this.x);
    }
   }
  
  altas = {
    fecha: '',
    contrato: '',
    cantidad: '',
    tipoIngreso: '',
    observacion: '',
    
  };

  saveData(form){
   this.variacioncesService.saveAlta(form);
  }
  logForm(form) {
    console.log(form.value)}
  ngOnInit() {
  }

}
