import { Component, OnInit, ViewChild } from '@angular/core';
import { People } from '../../core/models/People';
import { PeopleService } from '../../core/services/people.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.sass']
})

export class PeopleListComponent implements OnInit {

  PEOPLE: People[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthPlace', 'knownFor', 'actions'];
  dataSource: MatTableDataSource<any>;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private peopleService: PeopleService, private router: Router) {
    this.populateTable();
  }

  populateTable() {
    this.getPeople();
    this.dataSource = new MatTableDataSource(this.PEOPLE);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  getPeople() {
    this.PEOPLE = this.peopleService.getPeople();
    console.log(this.PEOPLE);
  }

  editPeople(person) {
    this.router.navigate([`/people/details/${person.id}`]);
  }

  deletePeople(id){
    this.peopleService.deletePerson(id);
    this.populateTable();
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

}
