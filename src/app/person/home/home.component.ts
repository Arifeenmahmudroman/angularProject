import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPerson: Person[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {

    this.get();

    // this.deleteModal = new window.bootstrap.modal(
    //   document.getElementById('deleteModal')
    // );

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    )
  }

  get() {
    this.personService.get().subscribe((data: Person[]) => {
      this.allPerson = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.personService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allPerson = this.allPerson.filter(_ => _.id !== this.idTodelete);
        this.deleteModal.hide();
      }

    }
    );
  }
}
