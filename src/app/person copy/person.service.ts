import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Person[]>(`http://localhost:3000/person`);
  }

  getById(id: number) {
    return this.http.get<Person>(`http://localhost:3000/person/${id}`);
  }

  update(payload: Person) {
    return this.http.put<Person>(`http://localhost:3000/person/${payload.id}`, payload);
  }

  delete(id: number) {
    return this.http.delete<Person>(`http://localhost:3000/person/${id}`);
  }
  create(payload: Person) {
    return this.http.post<Person>("http://localhost:3000/person", payload);
  }

}
