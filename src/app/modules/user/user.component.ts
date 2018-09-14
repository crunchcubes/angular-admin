import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService, ProjectService} from '../../core';

import { DataTable, DataTableResource } from 'angular5-data-table';
import { DataTableResourceCustom } from './data-table-resources-custom';

import {
  User,
  Project
} from '../../core';

@Component({
  selector: 'app-default',
  templateUrl: './user.component.html'
})
export class UserComponent extends BaseComponent {
  private users:any = [];
  private itemCount = 0;
  private limit = 0;
  private itemResource:any;
 
   
    
  constructor
  (
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) 
     {super();}

  ngOnInit() {
   // this.itemResource.count().then(count => this.itemCount = count);

    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.loaded = true;
      console.log(this.users);

      this.itemResource = new DataTableResourceCustom(this.users);
      this.itemResource.count().then(count => {this.itemCount = count, this.limit = 10});
    });
  }

  reloadItems(params) {
    if(this.itemResource != null){
      this.itemResource.query(params).then(items => this.users = items);
    }
  }
}
