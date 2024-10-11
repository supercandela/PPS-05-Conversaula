import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  query,
  orderBy,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private firestore: Firestore) {}

  registrarMensaje(salaId: string, usuario: string, mensaje: string) {
    let col = collection(this.firestore, 'chat');
    addDoc(col, {
      fecha: new Date(),
      salaId: salaId,
      usuario: usuario,
      mensaje: mensaje,
    });
  }

  getMensajes(salaId: string) {
    let col = collection(this.firestore, 'chat');
    const filteredQuery = query(
      col,
      where('salaId', '==', salaId),
      orderBy('fecha', 'asc')
    );
    const observable = collectionData(filteredQuery);
    return observable;
  }
}
