import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class CambioCondicionesLaboralesService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  data: Observable<any>;
  private _usuario:Usuario;
  
  constructor(public http: HttpClient, public authService:AuthService) { }

  private agregarAutorizacionHeader(){
    let token = this.authService.token;
    if(token != null){
      
        return this.httpHeaders.append('Authorization','Bearer ' + token);
    }
    return this.httpHeaders;
}

  

  cambio = {
    usuario: {
      id:null
    },
    motivoPrincipal: null,
    descripcion: 'ss',
    fecha: null,
  }
  save(form){
    var url = "http://localhost:8080/api/cambioCondiciones"
    let  usuario = this.authService.usuario;
    console.log(usuario.id);
    let postData = new FormData();
    this.cambio.usuario.id= usuario.id;
    this.cambio.motivoPrincipal = form.value.motivoPrincipal;
    this.cambio.descripcion = form.value.observacion;
    this.cambio.fecha = form.value.fecha;
    this.data = this.http.post(url,this.cambio, {headers: this.agregarAutorizacionHeader()});
    this.data.subscribe(data =>{
      console.log(data); 
    });
}
}
