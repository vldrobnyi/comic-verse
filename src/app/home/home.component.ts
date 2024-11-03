import { Component } from '@angular/core';
import { RecomendationsComponent } from "../recomendations/recomendations.component";
import { TopRatedComponent } from "../top-rated/top-rated.component";
import { NewReleasesComponent } from "../new-releases/new-releases.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecomendationsComponent, TopRatedComponent, NewReleasesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
