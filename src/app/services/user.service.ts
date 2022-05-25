/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models';


@Injectable({ providedIn: 'root' })
export class UserService{


  constructor(
    private db: AngularFirestore,

  ){

  }

  login(username: string, passwd: string): Promise<User[]> {

    return new Promise<any>((resolve) => {
      this.db.collection('User', ref => ref.where('username','==',username).where('password', '==', passwd)).valueChanges({idfield: 'id'}).subscribe(user =>  resolve(user));
    }) as Promise<User[]>;



  }

  create(username: string, passwd: string): void {
      this.db.collection('User').doc("452").set({username:username, password:passwd});
  }

  updateUser(email:string, nombre: string, apellido: string, img: string){
      const aux = this.db.doc(email);
      aux.set({nombre: nombre, apellido: apellido, img: img});
  }
}

