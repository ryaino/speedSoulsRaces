import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SpeedrunService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get("https://www.speedrun.com/api/v1/series/souls/games");
  }

  getCategories(abbreviation): Observable<any> {
    return this.http.get(
      "https://www.speedrun.com/api/v1/games/" + abbreviation + "/categories"
    );
  }
}
