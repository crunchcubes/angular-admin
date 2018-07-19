import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  taskNewControl: FormControl
  constructor() { 
    this.taskNewControl = new FormControl();
  }

  ngOnInit() {
  }

  addTask() {
    const taskName = this.taskNewControl.value;
    alert(taskName);
  }
}
