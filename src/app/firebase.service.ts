import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  database;

  constructor() {
    this.database = firebase.database();
  }
}
