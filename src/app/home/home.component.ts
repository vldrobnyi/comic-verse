import { Component } from '@angular/core';
import { RecomendationsComponent } from "../recomendations/recomendations.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecomendationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
