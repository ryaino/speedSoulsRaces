import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs";
import { FirebaseService } from "src/app/firebase.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  racesList = [];
  constructor(private db: FirebaseService) {
    this.getRaceList();
  }

  ngOnInit() {
    this.getRaceList();
  }

  getRaceList() {
    this.db.database.ref("/races").on("value", snapshot => {
      var rawData = snapshot.val();
      console.log(snapshot.val());

      var dataValues = [];

      for (let key in rawData) {
        dataValues.push(rawData[key]);
      }

      this.racesList = dataValues;
    });
  }
}
