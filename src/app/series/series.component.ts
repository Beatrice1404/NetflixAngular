import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from '../series-service.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  series: any[] = [];

  constructor(private serie:SeriesService,private router: Router) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this.serie.getSeries().subscribe((data: any) => {
      this.series = data.results;
    });
  }

  goToSeriesDetails(id: number): void {
    this.router.navigate(['/serie', id]);
  }
}
