import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Usuario } from '../clases/usuario';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CambioCondicionesLaboralesService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  data: Observable<any>;
  private _usuario: Usuario;

  constructor(public http: HttpClient, public authService: AuthService) { }

  // Agrega a la cabezera de la peticion las autorizaciones
  private agregarAutorizacionHeader() {
    let token = this.authService.token;
    if (token != null) {

      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }


  cambio = {
    usuario: {
      id: null
    },
    motivoPrincipal: null,
    descripcion: 'ss',
    fecha: null,
  }

  // Método que manda el formulario (ahora JSON) al backEnd para guardarlo 
  save(form) {
    var url = this.authService.ServerUrl + "/api/cambioCondiciones"
    let usuario = this.authService.usuario;
    let postData = new FormData();
    this.cambio.usuario.id = usuario.id;
    this.cambio.motivoPrincipal = form.value.motivoPrincipal;
    this.cambio.descripcion = form.value.observacion;
    this.cambio.fecha = form.value.fecha;
    this.data = this.http.post(url, this.cambio, { headers: this.agregarAutorizacionHeader() });
    this.data.subscribe(data => {
      swal.fire('Cambios de condiciones', '¡El registro fue cargado con éxito!', "success");
    }, err => {
      if (err.status == 400) {
        swal.fire('Cambios de condiciones', 'no posee conexión a internet', "error");
      }
    });
  }
}
