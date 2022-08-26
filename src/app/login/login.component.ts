import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(e: any) {
    // console.log('submitted');
    // console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    // console.log(username, password);
    if (username === 'admin' && password === 'admin') {
      // window.location.href = '/dashboard';
      this.Router.navigate(['/dashboard']);
    }


  }

}
