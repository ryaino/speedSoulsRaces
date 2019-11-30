import { Component, OnInit } from "@angular/core";
import { SpeedrunService } from "src/app/speedrun.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase.service";

@Component({
  selector: "app-race-creation",
  templateUrl: "./race-creation.component.html",
  styleUrls: ["./race-creation.component.css"]
})
export class RaceCreationComponent implements OnInit {
  games: any;
  categories: any;
  raceTitle;
  selectedGame;
  selectedCategory;

  constructor(
    private speedrunService: SpeedrunService,
    private router: Router,
    private db: FirebaseService
  ) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.speedrunService.getGames().subscribe(data => {
      this.games = data.data;
      console.log(this.games);
    });
  }

  getCategories() {
    this.speedrunService.getCategories(this.selectedGame).subscribe(data => {
      this.categories = data.data;
      console.log(data);
    });
  }

  gameSelected() {
    this.categories = null;
    console.log(this.selectedGame);
    this.getCategories();
  }

  categorySelected() {
    console.log(this.selectedCategory);
  }

  submitRace() {
    var generatedID = Date.now();

    this.db.database.ref("races/" + generatedID).set({
      title: this.raceTitle,
      game: this.selectedGame,
      category: this.selectedCategory
    });

    this.router.navigate(["/race", generatedID]);
    console.log("generated race with ID: " + generatedID);
  }
}
