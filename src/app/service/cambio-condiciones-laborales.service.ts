import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CambioCondicionesLaboralesService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  data: Observable<any>;
  constructor(public http: HttpClient, public authService:AuthService) { }

  private agregarAutorizacionHeader(){
    let token = this.authService.token;
    if(token != null){
        return this.httpHeaders.append('Authorization','Bearer ' + token);
    }
    return this.httpHeaders;
}

  cambio = {
    id_delegado: 1,
    motivoPrincipal: null,
    descripcion: 'ss',
    fecha: null,
  }
  save(form){
    var url = "http://localhost:8080/api/cambioCondiciones"
    let postData = new FormData();
    this.cambio.id_delegado= 1;
    this.cambio.motivoPrincipal = form.value.motivoPrincipal;
    this.cambio.descripcion = form.value.observacion;
    this.cambio.fecha = form.value.fecha;
    this.data = this.http.post(url,this.cambio, {headers: this.agregarAutorizacionHeader()});
    this.data.subscribe(data =>{
      console.log(data);
    });
}
}
