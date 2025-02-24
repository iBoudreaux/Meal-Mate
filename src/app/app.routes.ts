import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent}, //default route
    { path: 'search', component: SearchComponent}
];
