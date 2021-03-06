import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, UserService, DependencyResolverService } from '../../core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'username': ['username'],
      'email': ['email'],
      'password': ['password']
    });
  }

  ngOnInit() {
    /*if (this.userService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return;
    }*/
    DependencyResolverService.getUtilityService().setNavigation('', []);
    this.route.url.subscribe(data => {
      this.checkAction(data[data.length - 1].path);
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = 'login';
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
       // this.authForm.addControl('username', new FormControl());
      }
    });
  }

  checkAction(action: string):void{
    if(action === 'logout'){
      this.userService.logout();
      //this.router.navigateByUrl('auth/login')
    }
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe(
      data => this.router.navigateByUrl('/dashboard'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
        console.log(err);
      }
    );
  }
}

