import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-race-details",
  templateUrl: "./race-details.component.html",
  styleUrls: ["./race-details.component.css"]
})
export class RaceDetailsComponent implements OnInit {
  raceID;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.raceID = params["id"];
    });
  }
}
