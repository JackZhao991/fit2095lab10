import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-actor2movie',
  templateUrl: './actor2movie.component.html',
  styleUrls: ['./actor2movie.component.css']
})
export class Actor2movieComponent implements OnInit {
  movieItem: {_id:any, title:"", year:0};
  actorItem: {_id:any, name:"", bYear:0};
  moviesDB: any[] = [];
  actorsDB: any[] = [];

  constructor(private db: DatabaseService, private route: Router) { }

  ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
  }

  onSelectMovie(item){
    this.movieItem=item;
    console.log(this.movieItem);
  }
  onSelectActor(item){
    this.actorItem=item;
    console.log(this.actorItem);
  }
  onAddActor() {
    this.db.addActor(this.movieItem._id,this.actorItem).subscribe(result => {
      this.onGetMovies();
    });

    this.db.addMovie(this.actorItem._id, this.movieItem).subscribe(result => {
      this.onGetActors();
    });
  }

  onGetMovies() {
    this.db.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onGetActors() {
    this.db.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

}
