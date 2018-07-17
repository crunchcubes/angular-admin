import { Component, OnInit } from '@angular/core';
import { initializeCalendar } from '../../../assets/external-js/functions';
import {ScriptService} from '../../core/services/script.service'

@Component({
  selector: 'app-task-schedule',
  templateUrl: './task-schedule.component.html',
  //styleUrls: ['./fullcalendar.min.css']
})
export class TaskScheduleComponent implements OnInit {

  constructor(private script: ScriptService) { }

  ngOnInit() {
    this.script.load('momentjs', 'fullcalendar', ).then(data => {
      console.log('script loaded ', data);
      initializeCalendar();
  }).catch(error => console.log(error));
  }

}
