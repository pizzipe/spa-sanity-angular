import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { ActorsComponent } from './components/actors/actors.component';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent},
  { path: 'actors', component: ActorsComponent},
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: '**', redirectTo: '/movies' } // Wildcard route for a 404 page
];
