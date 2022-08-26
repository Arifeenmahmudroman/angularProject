import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    let resp = this.http.get('https://jsonplaceholder.typicode.com/users');
    resp.subscribe((data) => this.users = data);
  }

}
