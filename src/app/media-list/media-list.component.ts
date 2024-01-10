import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent {
  @Input() list: any[] = [];
  @Input() areMovies!: boolean;

  constructor(private router: Router) {
  }

  goToDetails(id: number): void {
    if (this.areMovies) {
      this.router.navigate(['/movie', id], { queryParams: { category: 'movie' } });
    } else {
      this.router.navigate(['/serie', id], { queryParams: { category: 'tv' } });
    }
  }
}
