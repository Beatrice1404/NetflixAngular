import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../movie-service.service';
import { SeriesService } from '../../series-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  isMovie: any;
  images: any[] = [];
  similar: any[] = [];
  imageUrl: string = "https://image.tmdb.org/t/p/w300";

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private seriesService: SeriesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const movieId: any = this.route.snapshot.paramMap.get('id');
    console.log(movieId);
    this.isMovie = this.route.snapshot.queryParams['category'] === 'movie';

    if (this.isMovie) {
      this.movieService.getMovieDetails(movieId).subscribe((data: any) => {
        this.movie = data;
        console.log(data);
        this.movieService.getMovieImages(movieId).subscribe((imagesData: any) => {
          this.images = imagesData.backdrops.map((image:any) => this.imageUrl + image.file_path);
          this.movieService.getMovieSimilar(movieId).subscribe((imagesData: any) => {
            this.similar = imagesData.results;
        });
      });
    })
   } else {
      this.seriesService.getSeriesById(movieId).subscribe((data: any) => {
        this.movie = data;
        this.seriesService.getSeriesImages(movieId).subscribe((imagesData: any) => {
          this.images = imagesData.backdrops.map((image:any) => this.imageUrl + image.file_path);
          this.seriesService.getSeriesSimilar(movieId).subscribe((imagesData: any) => {
            this.similar = imagesData.results;
        });
      });
    });
  }
}
goToDetails(movie: any) {
  if(this.isMovie)
    this.router.navigate([`movie/${movie.id}`], { queryParams: { category: 'movie' }}).then(() => {window.location.reload()});
  else
    this.router.navigate([`serie/${movie.id}`], { queryParams: { category: 'serie' }}).then(() => {window.location.reload()});
}
}
