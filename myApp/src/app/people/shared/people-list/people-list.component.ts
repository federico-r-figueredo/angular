import { Component, OnInit, ViewChild } from '@angular/core';
import { People } from '../../core/models/People';
import { PeopleService } from '../../core/services/people.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.sass']
})

export class PeopleListComponent implements OnInit {

  PEOPLE: People[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthPlace', 'knownFor', 'actions'];
  dataSource;
  searchKey: string;

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable() {
    this.getPeople();
    this.dataSource = new MatTableDataSource(this.PEOPLE);
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => this.PEOPLE = people);
    console.log(this.PEOPLE);
  }

  editPeople(person) {
    this.router.navigateByUrl(`/people/details/${person.id}`);
  }

  deletePeople(id){
    this.peopleService.deletePerson(id);
    this.populateTable();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSearchClear() {

  }

}
