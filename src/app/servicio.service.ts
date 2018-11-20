import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://reqres.in/api/users');
  }
  primerClick() {
    console.log('boton pulsado, metodo del servicio');
  }
}
