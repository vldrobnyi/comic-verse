import { Component } from '@angular/core';
import { ComicCard } from '../../models/comic-card.model';
import { ComicCardComponent } from '../comic-card/comic-card.component';

@Component({
  selector: 'app-new-releases',
  standalone: true,
  imports: [ComicCardComponent],
  templateUrl: './new-releases.component.html',
  styleUrl: './new-releases.component.scss'
})
export class NewReleasesComponent {
  comicCards: ComicCard[] = Array.from({ length: 10 }, () => new ComicCard());
}
