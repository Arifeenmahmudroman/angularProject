import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  users: any;

  use = ['a', 'b', 'c'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // let resp = this.http.get('https://jsonplaceholder.typicode.com/users');
    let resp = this.http.get('http://localhost:3000/person');
    resp.subscribe((data) => this.users = data);
  }
}
