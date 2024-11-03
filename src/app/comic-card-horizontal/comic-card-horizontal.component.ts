import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-card-horizontal',
  standalone: true,
  imports: [],
  templateUrl: './comic-card-horizontal.component.html',
  styleUrl: './comic-card-horizontal.component.scss'
})
export class ComicCardHorizontalComponent {
  constructor(public router: Router) {}
}
