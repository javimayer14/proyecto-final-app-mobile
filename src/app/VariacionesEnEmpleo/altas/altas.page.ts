import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'

@Component({
  selector: 'app-altas',
  templateUrl: './altas.page.html',
  styleUrls: ['./altas.page.scss'],
})

export class AltasPage implements OnInit {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public formBuilder: FormBuilder, public http: HttpClient, private variacioncesService: VariacionesLaboralesService) {

    this.variacioncesService.fechaDeHoy(this.altas);

  }

  altas = {
    fecha: '',
    contrato: '',
    cantidad: '',
    tipoIngreso: '',
    observacion: '',

  };

  // Pasa formulario para enviar a backEnd
  saveData(form) {
    this.variacioncesService.saveAlta(form);
  }

  ngOnInit() {

  }


}
