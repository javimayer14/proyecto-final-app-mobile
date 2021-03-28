import { Component, OnInit } from '@angular/core';
import { CambioCondicionesLaboralesService } from '../service/cambio-condiciones-laborales.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambio-condiciones-laborales',
  templateUrl: './cambio-condiciones-laborales.page.html',
  styleUrls: ['./cambio-condiciones-laborales.page.scss'],
})
export class CambioCondicionesLaboralesPage implements OnInit {
  subSelect: String[];
  valor: string;
  public pauseSpiner = true;
  public buttonDisable = false;
  constructor(private cambioService: CambioCondicionesLaboralesService,  private router: Router) {

    this.fechaDeHoy(this.cambio);
  }

  cambio = {
    fecha: '',
    motivoPrincipal: null,
    observacion: '',
  };

  // Este metodo llama a un revicio donde le pasa los datos del formulario (pasamanos)
  async saveData(form) {
    this.pauseSpiner = false
    this.buttonDisable= true;
    await this.cambioService.save(form);
    this.router.navigate(['/pagina-principal']);
    this.buttonDisable= false;
    this.pauseSpiner= true; 
  }

  // Método que quedó deprecado, su funcion era cambiar un combo en base a lo que se elegia en otro,
  // no se borra por si en el futuro debe implementarse.
  somethingChanged(value: any) {
    this.subSelect = [];
    this.valor = "";
    this.valor = value;

    if (this.valor == "Problemas en los pagos") {
      this.subSelect = [];
      this.subSelect.push('Variaciones (reducciones)');
      this.subSelect.push('Demoras en los pagos ');
      this.subSelect.push('Errores en la liquidación');
      this.subSelect.push('Pagos en especies');

    }
    else if (this.valor == "Jornada de trabajo") {
      this.subSelect = [];
      this.subSelect.push('Reducción de horas');
      this.subSelect.push('Cambios de turnos');
    }
    else if (this.valor == "Variaciones sobre la forma de trabajo") {
      this.subSelect = [];
      this.subSelect.push('Tipo de tarea');
      this.subSelect.push('Métod/formas trabajo');
      this.subSelect.push('Lugar de trabajo');
      this.subSelect.push('Tecn. máq. y/o herr');
      this.subSelect.push('Aum/quite de tareas');
    }
    else if (this.valor == "Salud y seguridad en el trabajo") {
      this.subSelect = [];
      this.subSelect.push('Incidentes');
      this.subSelect.push('Accid de trabajo');
      this.subSelect.push('Accid “in itinere”');
      this.subSelect.push('Licencias médicas');
      this.subSelect.push('Enfermedad laboral');
      this.subSelect.push('Ambiente insalubre');
      this.subSelect.push('Falta de EPP');
      this.subSelect.push('Falta de higiene');
      this.subSelect.push('Falta mantenimiento');
      this.subSelect.push(' Inspección ART o MT ');
    }
    else if (this.valor == "Vínculos en el trabajo") {
      this.subSelect = [];
      this.subSelect.push('Cambio de grupo');
      this.subSelect.push('Agrecion de autoridad');
      this.subSelect.push('Discriminacion');
      this.subSelect.push('Situaciones indignas');
      this.subSelect.push('Violencia de generos');
    }
    else if (this.valor == "Logros y beneficios") {
      this.subSelect = [];
      this.subSelect.push('Alimentacion');
      this.subSelect.push('Comedor');
      this.subSelect.push('Comedero');
      this.subSelect.push('Pago de comida');
      this.subSelect.push('Pausa para comer');

      this.subSelect.push('Aumento categoria');
      this.subSelect.push('Premios presentismo');
      this.subSelect.push('Premios produccion');
      this.subSelect.push('Premios paric anual');
      this.subSelect.push('Bonificacion turno');
      this.subSelect.push('Bonificacion puesto');
      this.subSelect.push('Viaticos');

      this.subSelect.push('Prestamos');
      this.subSelect.push('Becas educativas');
      this.subSelect.push('Escolaridad');
      this.subSelect.push('Regalo embarazo');
      this.subSelect.push('Mutuales');
      this.subSelect.push('Otros logros');
    }
  }
  ngOnInit() {
  }

  // Método que sirve para que por defecto
  // aparezca la fecha actual cuando se carga la App.
  // Carga la fecha actual en formato correcto.

  fechaDeHoy(cambio) {
    var f = new Date();
    var mesBien = '' + (f.getMonth() + 1);
    var diaBien = '' + f.getDate();
    var anioBien = f.getFullYear();
    if (mesBien.length < 2) mesBien = '0' + mesBien;
    if (diaBien.length < 2) diaBien = '0' + diaBien;
    var fechaFormatoCorrecto = [anioBien, mesBien, diaBien].join('-');
    var fin = fechaFormatoCorrecto.toString();
    cambio.fecha = fin;

  }



}
