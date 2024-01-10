import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2IwOGZkNmU0MDA5NTRjNjEyZWUyOWY3OGRlMDk2YyIsInN1YiI6IjY0Y2I2ZjgzNGZkMTQxMDEwODNiMDlmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v-j7M7tgH2b3_8FA70Wru0UhHeK9p3AnSrEwfV_oYEI';
  private apiUrl = 'https://api.themoviedb.org/3/movie';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.apiKey}`
  });

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/now_playing`, { headers: this.headers });
  }

  getMovieById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url,{ headers: this.headers });
}

getMovieDetails(id: string): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<any>(url, { headers: this.headers });
}

getSimilarMovies(movieId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/movies/${movieId}/similar`);
}

getMovieImages(movieId: string): Observable<any> {
  const url = `${this.apiUrl}/${movieId}/images`; 
  return this.http.get(url, { headers: this.headers });
}

getMovieSimilar(movieId: string): Observable<any> {
  const url = `${this.apiUrl}/${movieId}/similar`; 
  return this.http.get(url, { headers: this.headers });
}
}
