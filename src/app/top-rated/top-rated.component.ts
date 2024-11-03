import { Component } from '@angular/core';
import { ComicCardHorizontalComponent } from "../comic-card-horizontal/comic-card-horizontal.component";
import { ComicCard } from '../../models/comic-card.model';

@Component({
  selector: 'app-top-rated',
  standalone: true,
  imports: [ComicCardHorizontalComponent],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.scss'
})
export class TopRatedComponent {
  comicCards: ComicCard[] = Array.from({ length: 5 }, () => new ComicCard());
}
