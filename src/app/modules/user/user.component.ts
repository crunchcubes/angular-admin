import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService, ProjectService} from '../../core';

import { DataTable, DataTableResource } from 'angular5-data-table';
import { DataTableResourceCustom } from './data-table-resources-custom';
import data from './data-table-data';

import {
  User,
  Project
} from '../../core';

@Component({
  selector: 'app-default',
  templateUrl: './user.component.html'
})
export class UserComponent extends BaseComponent {
  private users: [User];
  private projects: [Project];
  private items:any = [];
  private itemCount = 0;

  itemResource = new DataTableResourceCustom(data);
   
    
  constructor
  (
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) 
     {super(); this.itemResource.count().then(count => this.itemCount = count);}

  ngOnInit() {

    this.projectService.getAll()
    .subscribe(projects => {
      this.projects = projects;
      //initializeFormElements();
    });


    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.loaded = true;
      console.log(this.users);
    });
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }
}
