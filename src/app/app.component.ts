import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { ComicCardHorizontalComponent } from "./comic-card-horizontal/comic-card-horizontal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExamplePdfViewerComponent, NavMenuComponent, ComicCardComponent, ComicCardHorizontalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'comic-verse';
}
