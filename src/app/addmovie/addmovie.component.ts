import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  title: string = "";
  year: number = 0;

  constructor(private dbService: DatabaseService, private route: Router) { }

  ngOnInit(): void {
  }

  onSaveMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.createMovie(obj).subscribe(result => {
      this.route.navigate(['/listmovies']);
    });
  }
}
