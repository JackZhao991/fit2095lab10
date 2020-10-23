import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {
  moviesDB: any[] = [];

  constructor(private db: DatabaseService, private route: Router) { }

  ngOnInit(): void {
    this.onGetMovies();
  }

  onDeleteMovie(item) {
    this.db.deleteMovie(item._id).subscribe(result => {
      this.route.navigate(['/listmovies']);
    });
  }

  onGetMovies() {
    this.db.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

}
