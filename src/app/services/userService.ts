import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginS: Subject<any> = new Subject();
  public login$ = this.loginS.pipe(distinctUntilChanged());
  private createUserS: Subject<any> = new Subject();
  public createUser$ = this.createUserS.pipe(distinctUntilChanged());
  private errorS: Subject<any> = new Subject();
  public error$ = this.errorS.pipe(distinctUntilChanged());

  constructor(private http: HttpClient) { }

  getApiUrl(){
    return 'http://localhost:5000'
  }

  postLoggin(user: User){
    let body = user
    this.http.post(`${this.getApiUrl()}/animelist/Users/login`, body, {observe: 'response'})
      .subscribe(response => {
        if (response.status === 200) {
          this.setLoggin(response.body);
        }
      },
      err => {
        this.setError(this.getErrorByCode(err.status))
      });
  }

  setLoggin(data: any){
    if (data) {
      this.loginS.next(data.userDetails);
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.userDetails))
    }
  }

  isLogged(){
    let user = localStorage.getItem('user')
    if (user) {
      this.loginS.next(JSON.parse(user))
    }
  }

  getUserLogged(){
    let user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  Logout(){
    console.log('pepe')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.loginS.next(null)
  }

  postCreateUser(user: User){
    let body = user
    this.http.post(`${this.getApiUrl()}/animelist/Users`, body, {observe: 'response'})
      .subscribe(response => {
        console.log(response.status)
        if (response.status === 200) {
          this.setCreteUser(response.body);
        }
      },
      err => {
        this.setError(this.getErrorByCode(err.status))
      });
  }

  setCreteUser(data: any){
      this.createUserS.next(data);
  }

  setError(data: Object | null){
    this.errorS.next(data);
  }

  getErrorByCode(error: Number){
    let retError = null;
    switch (error) {
      case 0:
        retError = {
          code:error,
          message: "Servicio momentaneamente caido."
        }
        break;
      case 500:
        retError = {
          code:error,
          message: "Ups, hubo un error! intentalo nuevamente"
        }
        break;
      case 400:
        retError = {
          code:error,
          message: "No encontramos lo que buscas!"
        }
        break;
      case 401:
        retError = {
          code:error,
          message: "Usuario o contraseña incorrecta"
        }
        break;
      default:
        retError = {
          code:error,
          message: "Ocurrio un error inesperado. Intente mas tarde"
        }
        break;
    }

    return retError
  }
}
