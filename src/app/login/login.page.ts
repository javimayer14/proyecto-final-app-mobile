import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  usuario: Usuario;
  public pauseSpiner = true;
  public buttonDisable = false;
  constructor(private router: Router, public authService: AuthService) {

    this.usuario = new Usuario();
  }

  // Metodo que permite el login de usuario
  // primero valida que los campos no estén vacios y despues
  // manda una petición http desde el metodo login que es encuentra
  // en el servicio 'authService'. Si la autenticacion es correcta redirecciona 
  // a la pagina de inicio.
  logIn(): void {
    this.pauseSpiner = false
    this.buttonDisable= true;
    authService: AuthService
    if (this.usuario.username == null || this.usuario.password == null) {
      swal.fire('Error Login', 'Username o Password vacio', "error");
      return;
    }
    this.authService.login(this.usuario).subscribe(response => {

      this.router.navigate(['/pagina-principal']);
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.buttonDisable= false;
      this.pauseSpiner= true; 
      swal.fire('Login', 'Bienvenido, ¡has iniciado sesión con éxito!', "success");
    }, err => {
      if (err.status == 400) {
        this.buttonDisable= false;
        this.pauseSpiner= true; 
        swal.fire('Error Login', 'Username o Password incorrecto', "error");
      }
      if (err.status == 500) {
        this.buttonDisable= false;
        this.pauseSpiner= true; 
        swal.fire('Error Login', 'error en el servidor', "error");
      }
      else{
        this.buttonDisable= false;
        this.pauseSpiner= true; 
        console.log("ERROR ", err)
      }
    });
  }

  ngOnInit() {
  }
  sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

}
