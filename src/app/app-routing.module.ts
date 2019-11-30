import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RaceCreationComponent } from "./pages/race-creation/race-creation.component";
import { RaceDetailsComponent } from "./pages/race-details/race-details.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "createRace", component: RaceCreationComponent },
  { path: "race/:id", component: RaceDetailsComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [
  HomePageComponent,
  RaceCreationComponent,
  LoginComponent,
  RaceDetailsComponent
];
