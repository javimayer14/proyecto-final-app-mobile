import { Component, OnInit } from '@angular/core';
import { CambioCondicionesLaboralesService } from '../service/cambio-condiciones-laborales.service' 

@Component({
  selector: 'app-cambio-condiciones-laborales',
  templateUrl: './cambio-condiciones-laborales.page.html',
  styleUrls: ['./cambio-condiciones-laborales.page.scss'],
})
export class CambioCondicionesLaboralesPage implements OnInit {
  subSelect:String[];
  valor:string;
  constructor(private cambioService : CambioCondicionesLaboralesService) {

   }
   
  cambio = {
    fecha: '',
    cambio_a: '',
    cambio_suba: '',
    observacion: '', 
  };

  saveData(form){
    this.cambioService.save(form);
  }
  somethingChanged(value:any){
      this.subSelect = [];
      this.valor = "";
      this.valor = value;

        console.log(this.valor);
       
      if(this.valor == "Problemas en los pagos"){
        this.subSelect = [];
        this.subSelect.push('Variaciones (reducciones)');
        this.subSelect.push('Demoras en los pagos ');
        this.subSelect.push('Errores en la liquidación');
        this.subSelect.push('Pagos en especies');
        console.log("lala");
      }
      else if (this.valor =="Jornada de trabajo"){
        this.subSelect = [];
        this.subSelect.push('Reducción de horas');
        this.subSelect.push('Cambios de turnos');
      }
      else if(this.valor =="Variaciones sobre la forma de trabajo"){
        this.subSelect = [];
        this.subSelect.push('Tipo de tarea');
        this.subSelect.push('Métod/formas trabajo');
        this.subSelect.push('Lugar de trabajo');
        this.subSelect.push('Tecn. máq. y/o herr');
        this.subSelect.push('Aum/quite de tareas');
      }
      else if (this.valor == "Salud y seguridad en el trabajo"){
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
      else if (this.valor == "Vínculos en el trabajo"){
        this.subSelect = [];
        this.subSelect.push('Cambio de grupo');
        this.subSelect.push('Agrecion de autoridad');
        this.subSelect.push('Discriminacion');
        this.subSelect.push('Situaciones indignas');
        this.subSelect.push('Violencia de generos');
      }
      else if (this.valor == "Logros y beneficios"){
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

}
