import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servicio/firebase.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  inputRut: string = ''
  inputNombre: string = ''
  inputApellido: string = ''
  inputSede: string = ''

  constructor(private fire: FirebaseService) { }

  ngOnInit() {
  }

  async crearUsuario(){
    const userInfo: Usuario = {
      nombre: this.inputNombre,
      apellido: this.inputApellido,
      rut: this.inputRut,
      sede: this.inputSede
    }
    await this.fire.createUser(this.inputRut, userInfo)
  }

}
