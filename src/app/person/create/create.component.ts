import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  personForm: Person = {
    id: 0,
    name: '',
    address: '',
    phone: 0
  };

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    this.personService.create(this.personForm).subscribe({
      next: (data) => {
        this.router.navigate(['/person/home']);
      },
      error: (err) => {
        console.log(err);


      }
    });
  }

}
