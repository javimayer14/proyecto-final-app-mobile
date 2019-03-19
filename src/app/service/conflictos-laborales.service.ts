import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConflictosLaboralesService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  data: Observable<any>;
  constructor(public http: HttpClient) { }

  conflicto = {
    id_delegado: 1,
    id_motivo: 1,
    id_medida: 0,
    descripcion: 'ss',
    fecha: null,
  }
  save(form){
    var url = "http://localhost:8080/api/conflictosLaborales"
    let postData = new FormData();
    this.conflicto.id_delegado= 1;
    this.conflicto.id_motivo = 1;
    this.conflicto.id_medida = 1;
    this.conflicto.descripcion = form.value.observacion;
    this.conflicto.fecha =form.value.fecha;
    this.data = this.http.post(url,this.conflicto, {headers: this.httpHeaders});
    this.data.subscribe(data =>{
      console.log(data);
    });
}
}
