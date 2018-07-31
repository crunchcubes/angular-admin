import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {UserService } from '../../core';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    console.log('DefaultComponent >>');
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['auth/login']);
    }
  }

}
