import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService, ProjectService} from '../../core';

//import { DataTable, DataTableResource } from 'angular6-data-table';
//import { DataTableResourceCustom } from './data-table-resources-custom';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {
  User,
  Project
} from '../../core';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-default',
  templateUrl: './user.component.html'
})
export class UserComponent extends BaseComponent {
  private users:any = [];
  private itemCount = 0;
  private limit = 0;
  private itemResource:any;
 
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
    
  constructor
  (
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) 
     {
       super();
       const users: UserData[] = [];
       for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }
   
       // Assign the data to the data source for the table to render
       this.dataSource = new MatTableDataSource(users);
    }

  ngOnInit() {
   // this.itemResource.count().then(count => this.itemCount = count);

    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.loaded = true;
      console.log(this.users);

      //this.itemResource = new DataTableResourceCustom(this.users);
      this.itemResource.count().then(count => {this.itemCount = count, this.limit = 10});
    });
  }

  reloadItems(params) {
    if(this.itemResource != null){
      this.itemResource.query(params).then(items => this.users = items);
    }
  }



  /************************************************************************** */
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


  //https://stackblitz.com/angular/dnbermjydavk?file=app%2Ftable-overview-example.ts


