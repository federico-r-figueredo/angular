import { Component, OnInit } from '@angular/core';
import { People } from '../../core/models/People';
import { PeopleService } from '../../core/services/people.service';

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.sass']
})
export class PeopleAddComponent implements OnInit {

  person: People = {
    id: NaN,
    firstName: '',
    lastName: '',
    birthPlace: '',
    knownFor: ''
  }

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getlastId().subscribe(id => this.person.id = id);
  }

  save() {
    this.peopleService.newPerson(this.person);
  }

}
