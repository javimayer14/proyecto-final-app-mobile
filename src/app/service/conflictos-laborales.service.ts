import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConflictosLaboralesService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  data: Observable<any>;
  constructor(public http: HttpClient, public authService: AuthService) { }

  // Agrega a la cabezera de la peticion las autorizaciones
  private agregarAutorizacionHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  conflicto = {
    usuario: {
      id: null
    },
    medida: null,
    descripcion: 'ss',
    fecha: null,
  }

  // Método que manda el formulario (ahora JSON) al backEnd para guardarlo 
  save(form) {
    var url = this.authService.ServerUrl + "/api/conflictosLaborales"
    let usuario = this.authService.usuario;
    let postData = new FormData();
    this.conflicto.usuario.id = usuario.id;
    this.conflicto.medida = form.value.medida;
    this.conflicto.descripcion = form.value.observacion;
    this.conflicto.fecha = form.value.fecha;
    this.data = this.http.post(url, this.conflicto, { headers: this.agregarAutorizacionHeader() });
    this.data.subscribe(data => {
      swal.fire('Conflictos laborales', '¡El registro fue cargado con éxito!', "success");
    }, err => {
      if (err.status == 400) {
        swal.fire('Conflictos laborales', 'no posee conexión a internet', "error");
      }
    });
  }
}
