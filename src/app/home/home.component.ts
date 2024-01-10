import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie-service.service';
import { SeriesService } from '../series-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];
  series: any[] = [];
  mainMovie: any; 

  constructor(private movie:MovieService,private serie:SeriesService,private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.getSeries();
  }

  getMovies(): void {
    this.movie.getMovies().subscribe(data => {
      this.movies = data.results;
      this.mainMovie = this.movies[0]; 
    });
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/movie', id], { queryParams: { category: 'movie' } });
  }

  getSeries(): void { 
    this.serie.getSeries().subscribe(data => {
      this.series = data.results;
    });
  }

  goToSeriesDetails(id: number): void {
    this.router.navigate(['/serie', id]);
  }

  
}
