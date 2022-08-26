import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  personForm: Person = {
    id: 0,
    name: '',
    address: '',
    phone: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      var id = Number(params.get('id'));
      this.getById(id);

    });
  }
  getById(id: number) {
    this.personService.getById(id).subscribe((data) => {
      this.personForm = data;
    });
  }
  update() {
    this.personService.update(this.personForm).subscribe({
      next: (data) => {
        this.router.navigate(['/person/home']);
      },
      error: (err) => {
        console.log(err);
      }
    });



  }
}
