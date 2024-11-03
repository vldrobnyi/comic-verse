import { Component, Input } from '@angular/core';
import { ComicCard } from '../../models/comic-card.model';

@Component({
  selector: 'app-comic-card',
  standalone: true,
  imports: [],
  templateUrl: './comic-card.component.html',
  styleUrl: './comic-card.component.scss'
})
export class ComicCardComponent {
  @Input() card: ComicCard = new ComicCard();
}
