import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2IwOGZkNmU0MDA5NTRjNjEyZWUyOWY3OGRlMDk2YyIsInN1YiI6IjY0Y2I2ZjgzNGZkMTQxMDEwODNiMDlmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v-j7M7tgH2b3_8FA70Wru0UhHeK9p3AnSrEwfV_oYEI';
  private apiUrl = 'https://api.themoviedb.org/3/tv/';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.apiKey}`
  });

  constructor(private http: HttpClient) { }

  getSeries(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"top_rated", { headers: this.headers });
  }
  getSeriesById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url,{ headers: this.headers });
}

getSeriesDetails(id: number): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<any>(url, { headers: this.headers });
}

getSimilarSeries(movieId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/tv/${movieId}/similar`);
}

getSeriesImages(movieId: string): Observable<any> {
  const url = `${this.apiUrl}/${movieId}/images`; 
  return this.http.get(url, { headers: this.headers });
}

getSeriesSimilar(movieId: string): Observable<any> {
  const url = `${this.apiUrl}/${movieId}/similar`; 
  return this.http.get(url, { headers: this.headers });
}
}
