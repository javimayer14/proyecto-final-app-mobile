import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VariacionesLaboralesService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  data: Observable<any>;
  constructor( public http: HttpClient, public authService: AuthService ) { }

  private agregarAutorizacionHeader(){
    let token = this.authService.token;
    if(token != null){
        return this.httpHeaders.append('Authorization','Bearer ' + token);
    }
    return this.httpHeaders;
}

  prueba = {
    id_delegado: 1,
    id_tipo_contrato: 1,
    id_motivo: 1,
    cantidad: 0,
    tipo_variacion: 'alta',
    tipo_incorporacion: 'sss',
    descripcion: 'ss',
    fecha: null,
  }

  baja = {
    id_delegado: 1,
    id_tipo_contrato: 1,
    id_motivo: 1,
    tipo_variacion: 'baja',
    contrato: '',
    cantidad: 0,
    motivo: '',
    observacion: '',
    fecha: null,
  }

  suspencion = {
    id_delegado: 1,
    id_tipo_contrato: 1,
    id_motivo: 1,
    tipo_variacion: 'suspencion',
    contrato: '',
    cantidad: 0,
    motivo: '',
    observacion: '',
    fecha: null,
  }

  saveAlta(form){
    var url = "http://localhost:8080/api/variaciones"
    let postData = new FormData();
    this.prueba.id_delegado= 1;
    this.prueba.id_motivo = 1;
    this.prueba.id_tipo_contrato = 1;
    this.prueba.cantidad = form.value.cantidad;
    this.prueba.tipo_incorporacion= form.value.tipoIngreso;
    this.prueba.tipo_variacion = "alta";
    this.prueba.descripcion = form.value.observacion;
    this.prueba.fecha = form.value.fecha;
    this.data = this.http.post(url,this.prueba, {headers: this.agregarAutorizacionHeader()});
    this.data.subscribe(data =>{
      console.log(data);
    });

    
    console.log(form.value);
  }
  saveBaja(form){
    var url = "http://localhost:8080/api/variaciones"
    let postData = new FormData();
    this.baja.id_delegado= 1;
    this.baja.id_motivo = 1;
    this.baja.id_tipo_contrato = 1;
    this.baja.cantidad = form.value.cantidad;
    this.baja.tipo_variacion = "baja";
    this.baja.observacion = form.value.observacion;
    this.baja.fecha = form.value.fecha;
    this.data = this.http.post(url,this.baja, {headers: this.agregarAutorizacionHeader()});
    this.data.subscribe(data =>{
      console.log(data);
    });
}
saveSuspencion(form){
  var url = "http://localhost:8080/api/variaciones"
  let postData = new FormData();
  this.suspencion.id_delegado= 1;
  this.suspencion.id_motivo = 1;
  this.suspencion.id_tipo_contrato = 1;
  this.suspencion.cantidad = form.value.cantidad;
  this.suspencion.tipo_variacion = "suspencion";
  this.suspencion.fecha =form.value.fecha;
  this.suspencion.observacion = form.value.observacion;
  this.data = this.http.post(url,this.suspencion, {headers: this.agregarAutorizacionHeader()});
  this.data.subscribe(data =>{
    console.log(data);
  });
}

fechaDeHoy(json){
  var f = new Date();
  var mesBien = '' + (f.getMonth() + 1);
  var diaBien = '' + f.getDate();
  var anioBien = f.getFullYear();
  if (mesBien.length < 2) mesBien = '0' + mesBien;
  if (diaBien.length < 2) diaBien = '0' + diaBien;
  var fechaFormatoCorrecto =  [anioBien, mesBien, diaBien].join('-');
  var fin = fechaFormatoCorrecto.toString();
  json.fecha = fin;
  console.log(fechaFormatoCorrecto);
  console.log(fin);
}
}