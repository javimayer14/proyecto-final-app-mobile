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
  usuario:Usuario;
  constructor(private router:Router,public authService:AuthService) {
    this.usuario = new Usuario();
   }

  ngOnInit() {
  }

  logIn():void{
   authService:AuthService
    if(this.usuario.username == null || this.usuario.password == null){
      swal.fire('Error Login','Username o Password vacio',"error");
      return;
    }
    this.authService.login(this.usuario).subscribe(response  => {

      console.log(response);
      this.router.navigate(['/pagina-principal']);
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      swal.fire('Login', 'Bienvenido, has iniciado sesion con exito !' , "success");
    }, err =>{
      if(err.status == 400){
        swal.fire('Error Login','Username o Password incorrecto',"error");
      }
    });
  }

}
