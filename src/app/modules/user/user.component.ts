import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService, ProjectService} from '../../core';

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
  constructor
  (
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) 
     {super()}

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
}
