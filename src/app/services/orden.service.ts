import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private firestore: AngularFirestore) { }

  agregarOrder(order: any): Promise<any> {
    return this.firestore.collection('ordenes').add(order)
  }

  getOrders(): Observable<any> {
    return this.firestore.collection('ordenes').snapshotChanges();
  }

  cancelarOrden(id: string): Promise<any> {
    return this.firestore.collection('ordenes').doc(id).delete();
  }

  entregarOrden(id: string) {
    return this.firestore.collection('ordenes').doc(id).update({ estado: "Entregado" })
  }
}
