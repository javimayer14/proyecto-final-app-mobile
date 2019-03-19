import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CambioCondicionesLaboralesService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  data: Observable<any>;
  constructor(public http: HttpClient) { }
  cambio = {
    id_delegado: 1,
    id_motivo: 1,
    sub_motivo: "sss",
    descripcion: 'ss',
    fecha: null,
  }
  save(form){
    var url = "http://localhost:8080/api/cambioCondiciones"
    let postData = new FormData();
    this.cambio.id_delegado= 1;
    this.cambio.id_motivo = 1;
    this.cambio.sub_motivo = form.value.cambio_suba;
    this.cambio.descripcion = form.value.observacion;
    this.cambio.fecha = form.value.fecha;
    this.data = this.http.post(url,this.cambio, {headers: this.httpHeaders});
    this.data.subscribe(data =>{
      console.log(data);
    });
}
}
