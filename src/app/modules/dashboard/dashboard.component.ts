import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../core/base.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent extends BaseComponent {

  constructor() { super() }
  ngOnInit() {
    super.ngOnInit();
    this.setNavigation(
      'Dashboard',
      [{name: 'Dashboard', link: '/', type : 'active'}]
    );
  }
}

//https://stackoverflow.com/questions/34489916/how-to-load-external-scripts-dynamically-in-angular
