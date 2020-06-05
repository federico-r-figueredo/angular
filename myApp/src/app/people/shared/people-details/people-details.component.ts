import { Component, OnInit } from '@angular/core';
import { People } from '../../core/models/People';
import { PeopleService } from '../../core/services/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.sass']
})

export class PeopleDetailsComponent implements OnInit {

  person: People;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    var id = parseInt(window.location.href.substring(window.location.href.lastIndexOf("/") + 1));
    this.peopleService.getPerson(id).subscribe(people => this.person = people);
    console.log(this.person);
  }

  save() {
    this.peopleService.setPerson(this.person);
  }

}
