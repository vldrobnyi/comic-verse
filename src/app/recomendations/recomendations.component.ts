import { Component } from '@angular/core';
import { ComicCard } from '../../models/comic-card.model';
import { ComicCardComponent } from '../comic-card/comic-card.component';

@Component({
  selector: 'app-recomendations',
  standalone: true,
  imports: [ComicCardComponent],
  templateUrl: './recomendations.component.html',
  styleUrl: './recomendations.component.scss'
})
export class RecomendationsComponent {
  comicCards: ComicCard[] = Array.from({ length: 7 }, () => new ComicCard());
}
