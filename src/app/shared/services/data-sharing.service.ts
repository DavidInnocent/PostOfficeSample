import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Parcel } from 'src/app/models/Parcel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  setParcelAdd() {
    this.firestore.collection(environment.PARCELS).add({
      Name: 'Bag of Potatoes',
      Description: 'lorem ipsummmm',
      ImageURL: "https://images.ctfassets.net/vtn4rfaw6n2j/4nKELNZvRF0b23IWODsnhl/d8a7c0f261353901c37e89cf046d9e64/image6.png?fm=webp&q=85",
      Receiver: 'David Innocent',
      Sender: "Innocent Arisa",
      StorageCharge:900,
      Weight:1,
      Origin:"Nairobi",
      Destination:"Croatia",
      UserId:"USERID1"
    })
  }
  parcel!:Parcel
  
  constructor(public firestore: AngularFirestore) { }
 
  setParcel(parcel: Parcel) {
    this.parcel=parcel;
  }
  getParcel():Parcel {
    return this.parcel;
  }

}
