import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';
import {  HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _usuario:Usuario;
  private _token:String;
  constructor(private http:HttpClient) { }

  public get usuario(): Usuario{
    if(this._usuario != null){
        return this._usuario;
    }else if(this._usuario == null || sessionStorage.getItem('usuario') != null){
      this._usuario =  JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): String{
    if(this._token != null){
      return this._token;
  }else if(this._token == null || sessionStorage.getItem('token') != null){
    this._token =  sessionStorage.getItem('token');
    return this._token;
  }
  return null;
    
  }

  login(usuario:Usuario):Observable<any>{
    const urlEndpoint= "http://localhost:8080/oauth/token";
    const credenciales = btoa('angularApp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + credenciales
    });
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username',usuario.username);
    params.set('password',usuario.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint,params.toString(),{headers: httpHeaders});
  }

  guardarUsuario(accesToken:string):void{
    let payload = this.obtenerDatosToken(accesToken);
    this._usuario = new Usuario();
    this._usuario.username = payload.username;
    this._usuario.roles = payload.roles;
    this.usuario.id = payload.idUsuario;

    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
    
  }
  guardarToken(accessToken:string):void{
    this._token =accessToken;
    sessionStorage.setItem('token',accessToken);
  }

  obtenerDatosToken(accessToken):any{

    if(accessToken != null){

      return JSON.parse(atob(accessToken.split(".")[1]));

    }
    return null;

  }
  isAuthenticated(): boolean{
    let payload = this.obtenerDatosToken(this.token);
    if(payload != null && payload.user_name && payload.user_name.length>0){
      return true;
    }
    return false;
  }
  logOut():void{
      this._token = null;
      this._usuario = null;
      sessionStorage.clear();
      sessionStorage.removeItem("usuario");
      sessionStorage.removeItem("token");
  }

  
}