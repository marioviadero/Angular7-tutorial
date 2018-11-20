import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;

  constructor(private servicio: ServicioService) { }

  ngOnInit() {
    this.h1Style = true;
    this.servicio.primerClick();

    this.servicio.getUsuarios().subscribe(servicio => {
      this.users = servicio;
      console.log(this.users);
    });
  }

}
