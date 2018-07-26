import { Component, OnInit } from '@angular/core';
//import { TaskScheduleComponent } from './task-schedule.component'
import {BaseComponent} from '../../core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent extends BaseComponent {

  constructor() { super() }
  ngOnInit() {
    super.ngOnInit();
    this.setTitle('Dashboard');
  }

}

//https://stackoverflow.com/questions/34489916/how-to-load-external-scripts-dynamically-in-angular
