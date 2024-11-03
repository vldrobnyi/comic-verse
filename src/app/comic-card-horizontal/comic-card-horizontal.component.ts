import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ComicCard } from '../../models/comic-card.model';

@Component({
  selector: 'app-comic-card-horizontal',
  standalone: true,
  imports: [],
  templateUrl: './comic-card-horizontal.component.html',
  styleUrl: './comic-card-horizontal.component.scss'
})
export class ComicCardHorizontalComponent {
  @Input() card: ComicCard = new ComicCard();
  constructor(public router: Router) {}
}
