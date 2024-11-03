import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

export const routes: Routes = [
    {
        title: 'ComicVerse - Home',
        path: '',
        component: HomeComponent
    },
    {
        title: 'ComicVerse - Viewer',
        path: 'viewer',
        component: PdfViewerComponent
    },
    {
        title: 'ComicVerse - Catalogue',
        path: 'catalogue',
        component: CatalogueComponent
    }
];
