import { Component } from '@angular/core';
import { FirebaseService } from '../servicio/firebase.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inputRut: string = ''
  userInfo : Usuario = new Usuario()

  constructor(private fire: FirebaseService) {}

  async obtenerInfo(){
    this.userInfo = await this.fire.getUserByRut(this.inputRut)
  }



}
