import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConflictosLaboralesService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  data: Observable<any>;
  constructor(public http: HttpClient, public authService: AuthService) { }

  private agregarAutorizacionHeader(){
    let token = this.authService.token;
    if(token != null){
        return this.httpHeaders.append('Authorization','Bearer ' + token);
    }
    return this.httpHeaders;
}
  
  conflicto = {
    usuario: {
      id:null
    },
    medida: null,
    descripcion: 'ss',
    fecha: null,
  }
  save(form){
    var url = "http://localhost:8080/api/conflictosLaborales"
    let  usuario = this.authService.usuario;
    console.log(usuario.id);
    let postData = new FormData();
    this.conflicto.usuario.id= usuario.id;
    this.conflicto.medida = form.value.medida;
    this.conflicto.descripcion = form.value.observacion;
    this.conflicto.fecha =form.value.fecha;
    this.data = this.http.post(url,this.conflicto, {headers: this.agregarAutorizacionHeader()});
    this.data.subscribe(data =>{
      console.log(data);
    });
}
}
