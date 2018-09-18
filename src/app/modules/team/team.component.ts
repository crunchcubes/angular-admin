import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService, TeamService} from '../../core';

import { DataTable, DataTableResource } from 'angular5-data-table';

import {
  Team
} from '../../core';

@Component({
  selector: 'app-default',
  templateUrl: './team.component.html'
})
export class TeamComponent extends BaseComponent {
  private teams: [Team];
    
  constructor
  (
    private userService: UserService,
    private teamService: TeamService,
    private router: Router
  ) {super()}

  ngOnInit() {
    
  }
}
