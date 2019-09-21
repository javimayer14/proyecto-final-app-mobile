import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class VariacionesLaboralesService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  data: Observable<any>;
  constructor(public http: HttpClient, public authService: AuthService) { }

  private agregarAutorizacionHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }
  // Datos de formulario alta 
  prueba = {
    usuario: {
      id: null
    },
    tipo_contrato: "",
    motivo: null,
    cantidad: 0,
    tipoVariacion: 'alta',
    tipoIncorporacion: 'sss',
    descripcion: 'ss',
    fecha: null,
  }

  // Datos de formulario baja 
  baja = {
    usuario: {
      id: null
    },
    id_tipo_contrato: 1,
    tipoVariacion: 'baja',
    contrato: '',
    cantidad: 0,
    motivo: '',
    descripcion: '',
    fecha: null,
  }

  // Datos de formulario suspension 
  suspencion = {
    usuario: {
      id: null
    },
    id_tipo_contrato: 1,

    tipoVariacion: 'suspencion',
    contrato: '',
    cantidad: 0,
    motivo: '',
    descripcion: '',
    fecha: null,
  }

  // Método que manda el formulario de alta (ahora JSON) al backEnd para guardarlo
  saveAlta(form) {
    var url = this.authService.ServerUrl + "/api/variaciones"
    let postData = new FormData();
    let usuario = this.authService.usuario;
    this.prueba.usuario.id = usuario.id;
    this.prueba.motivo = null;
    this.prueba.tipo_contrato = form.value.contrato;
    this.prueba.cantidad = form.value.cantidad;
    this.prueba.tipoIncorporacion = form.value.tipoIngreso;
    this.prueba.tipoVariacion = "alta";
    this.prueba.descripcion = form.value.observacion;
    this.prueba.fecha = form.value.fecha;
    let params = new HttpParams().set("contrato", form.value.contrato);
    this.data = this.http.post(url, this.prueba, { headers: this.agregarAutorizacionHeader(), params: params });
    this.data.subscribe(data => {
      swal.fire('Variaciones laborales (altas)', '¡El registro fue cargado con éxito!', "success");
    }, err => {
      if (err.status == 400) {
        swal.fire('Variaciones laborales', 'no posee conexión a internet', "error");
      }
    });

  }

  // Método que manda el formulario de baja (ahora JSON) al backEnd para guardarlo 
  saveBaja(form) {
    var url = this.authService.ServerUrl + "/api/variaciones"
    let postData = new FormData();
    let usuario = this.authService.usuario;
    this.baja.usuario.id = usuario.id;
    this.baja.motivo = form.value.motivo;
    this.baja.id_tipo_contrato = 1;
    this.baja.cantidad = form.value.cantidad;
    this.baja.tipoVariacion = "baja";
    this.baja.descripcion = form.value.observacion;
    this.baja.fecha = form.value.fecha;
    let params = new HttpParams().set("contrato", form.value.contrato);

    this.data = this.http.post(url, this.baja, { headers: this.agregarAutorizacionHeader(), params: params });
    this.data.subscribe(data => {
      swal.fire('Variaciones laborales (bajas)', '¡El registro fue cargado con éxito!', "success");
    }, err => {
      if (err.status == 400) {
        swal.fire('Variaciones laborales', 'no posee conexión a internet', "error");
      }

    });
  }

  // Método que manda el formulario de suspencion (ahora JSON) al backEnd para guardarlo 
  saveSuspencion(form) {
    var url = this.authService.ServerUrl + "/api/variaciones"
    let postData = new FormData();
    let usuario = this.authService.usuario;
    this.suspencion.usuario.id = usuario.id;
    this.suspencion.motivo = form.value.motivo;
    this.suspencion.id_tipo_contrato = 1;
    this.suspencion.cantidad = form.value.cantidad;
    this.suspencion.tipoVariacion = "suspencion";
    this.suspencion.fecha = form.value.fecha;
    this.suspencion.descripcion = form.value.observacion;
    let params = new HttpParams().set("contrato", form.value.contrato);
    this.data = this.http.post(url, this.suspencion, { headers: this.agregarAutorizacionHeader(), params: params });
    this.data.subscribe(data => {
      swal.fire('Variaciones laborales (suspensiones)', '¡El registro fue cargado con éxito!', "success");
    }, err => {
      if (err.status == 400) {
        swal.fire('Variaciones laborales', 'no posee conexión a internet', "error");
      }
    });
  }

  // Carga la fecha actual
  fechaDeHoy(json) {
    var f = new Date();
    var mesBien = '' + (f.getMonth() + 1);
    var diaBien = '' + f.getDate();
    var anioBien = f.getFullYear();
    if (mesBien.length < 2) mesBien = '0' + mesBien;
    if (diaBien.length < 2) diaBien = '0' + diaBien;
    var fechaFormatoCorrecto = [anioBien, mesBien, diaBien].join('-');
    var fin = fechaFormatoCorrecto.toString();
    json.fecha = fin;

  }
}