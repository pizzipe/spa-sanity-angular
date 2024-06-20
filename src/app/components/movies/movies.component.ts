import { Component, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { Movie } from '../../models/movie';
import { SanityService } from '../../service/sanity.service';

@Component({
selector: 'app-movies',
  standalone: true,
 imports: [CommonModule],
templateUrl: './movies.component.html',
styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
constructor(private sanityService: SanityService ) { }

  movies: Movie[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies(): Promise<Movie[]>  {
    this.movies = await this.sanityService.getMovies();
    return this.movies;
  }
}
