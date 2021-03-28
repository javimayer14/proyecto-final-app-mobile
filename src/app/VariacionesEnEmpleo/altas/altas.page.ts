import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariacionesLaboralesService } from '../../service/variaciones-laborales.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.page.html',
  styleUrls: ['./altas.page.scss'],
})

export class AltasPage implements OnInit {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  public pauseSpiner = true;
  public buttonDisable = false;
  constructor(public formBuilder: FormBuilder, public http: HttpClient, private variacioncesService: VariacionesLaboralesService,  private router: Router) {

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
  async saveData(form) {
    this.pauseSpiner = false
    this.buttonDisable= true;
    await this.variacioncesService.saveAlta(form);
    this.router.navigate(['/pagina-principal']);
    this.buttonDisable= false;
    this.pauseSpiner= true;    
  }

  ngOnInit() {

  }


}
