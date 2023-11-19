import { Injectable } from '@angular/core';
import { Database, ref, get, set } from '@angular/fire/database';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: Database) { }

  async getUserByRut(rut: string) {
    const userRef = ref(this.db, `usuarios/${rut}`)
    const userInfo = await get(userRef)

    return userInfo.val()
  }

  async createUser(rut:string, userInfo: Usuario){
    const userRef = ref(this.db, `usuarios/${rut}`)
    await set(userRef, userInfo)
  }
}
