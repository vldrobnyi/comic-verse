import { Component, OnInit, HostListener } from '@angular/core';
import { ComicCard } from '../../models/comic-card.model';
import { FormsModule } from '@angular/forms';
import { ComicCardComponent } from '../comic-card/comic-card.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [FormsModule, ComicCardComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {
  publishers: string[] = [];
  genres: string[] = [];
  date: string = '';

  selectedPublisher: string = '';
  selectedGenre: string = '';

  page = 1;
  showPagination = true;
  pages = Array.from({ length: 3 }, (_, i) => i + 1);

  showElements: number = 21;

  comics: ComicCard[] = Array.from({ length: 58 }, () => new ComicCard());
  comicsFiltered: ComicCard[] = [];
  

  ngOnInit() {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1279) {
        this.showElements = 21;
      }
      if (window.innerWidth <= 768) {
        this.showElements = 15;
      }
      if (window.innerWidth < 768) {
        this.showElements = 9;
      }
   }
    

    this.publishers = [...new Set(this.comics.map(comic => comic.publisher))];
    this.genres = [...new Set(this.comics.map(comic => comic.genre))];
    this.comicsFiltered = this.comics.slice((this.page - 1) * this.showElements, this.page * this.showElements);
    this.pages = Array.from({ length: Math.ceil(this.comics.length / this.showElements) }, (_, i) => i + 1);
  }

  filterComics(isPageChange = false) {
    if (!isPageChange) {
      this.page = 1;
    }

    if (this.date === 'Asc'){
      this.comics.sort((a, b) => a.releaseDate - b.releaseDate);
    }
    if (this.date === 'Desc'){
      this.comics.sort((a, b) => b.releaseDate - a.releaseDate);
    }
    const temp = this.comics.filter(comic => {
      if (this.selectedPublisher && !(this.selectedPublisher === comic.publisher)) {
        return false;
      }
      if (this.selectedGenre && !(this.selectedGenre === comic.genre)) {
        return false;
      }
      return true;
    });

    this.comicsFiltered = temp.slice((this.page - 1) *  this.showElements, this.page *  this.showElements);

    this.showPagination = temp.length > this.showElements;
    this.pages = Array.from({ length: Math.ceil(temp.length / this.showElements) }, (_, i) => i + 1);
  }

  changePage(newPage: number) {
    this.page = newPage;
    this.filterComics(true);
  }
}
