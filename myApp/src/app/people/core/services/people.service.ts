import { Injectable } from '@angular/core';
import { People } from '../models/People';
import { PEOPLE } from '../mock/mock-people';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  constructor(private router: Router) { }
  getPeople(): Observable<People[]> {
    return of(PEOPLE);
  }
  getPerson(id: number): Observable<People> {
    return of(PEOPLE.find(people => people.id === id));
  }
  setPerson(person) {
    var index = PEOPLE.indexOf(PEOPLE.find(people => people.id === person.id));
    PEOPLE[index] = person;
    alert("Update successful")
    this.router.navigateByUrl(`/people`);
  }
  newPerson(person) {
    PEOPLE.push(person);
    alert("Create successful")
    this.router.navigateByUrl(`/people`);
  }
  deletePerson(id) {
    var index = PEOPLE.indexOf(PEOPLE.find(people => people.id === id));
    PEOPLE.splice(index, index + 1);
    alert("Delete successful")
  }
  getlastId(): Observable<number> {
    return of(PEOPLE[PEOPLE.length - 1].id + 1);
  }
}
