import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: any[] = [];

  constructor(private movie:MovieService,private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movie.getMovies().subscribe({
      next: (data: any) => {
        this.movies = data.results;
      },
      error: (err: any) => {
        console.error('There was an error while getting movies', err);
      }
    });
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}
