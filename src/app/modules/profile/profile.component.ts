import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService} from '../../core';

//import { DataTable, DataTableResource } from 'angular-6-data-table';

import {
  Profile
} from '../../core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent extends BaseComponent {
  private teams: [Profile];
    
  constructor
  (
    private userService: UserService,
    private router: Router
  ) {super()}

  ngOnInit() {
    this.setNavigation(
      'Profiles', 
      [{name: 'Profile', link: '/team', type : 'active'}]
    );
  }
}
