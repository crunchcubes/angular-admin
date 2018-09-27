import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService, ProjectService} from '../../core';

import { DataTable, DataTableResource } from 'angular5-data-table';

import {
  User,
  Project
} from '../../core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent extends BaseComponent {
  private projects: [Project];
    
  constructor
  (
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) {super()}

  ngOnInit() {
    this.projectService.getAll()
    .subscribe(projects => {
      this.projects = projects;
    });
  }
}
