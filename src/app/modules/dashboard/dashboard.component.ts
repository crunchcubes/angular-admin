import { Component, OnInit } from '@angular/core';
//import { TaskScheduleComponent } from './task-schedule.component'
import { initializeCalendar } from '../../../assets/external-js/functions';
import {ScriptService} from '../../core/services/script.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private script: ScriptService) { }
  ngOnInit() {
    //initializeCalendar();

    this.script.load('fullcalendar').then(data => {
      console.log('script loaded ', data);
      initializeCalendar();
  }).catch(error => console.log(error));
  }

}

//https://stackoverflow.com/questions/34489916/how-to-load-external-scripts-dynamically-in-angular
