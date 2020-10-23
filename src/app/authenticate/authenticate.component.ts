import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  pin: string = '';
  verified: boolean = false;
  actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetActors();
  }

  authenticate() {
    if (this.pin === 'admin123')
      this.verified = true;
  }

  onDeleteAllActors() {
    this.dbService.deleteAllActors().subscribe(result => {
      this.onGetActors();
      this.router.navigate(["/listactors"]);
    });
  }

  onGetActors() {
    console.log("From on GetActors");

    return this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

}
