import { Component, OnInit } from '@angular/core';
//import {TagsService } from '../../core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  constructor(
   // private tagsService: TagsService
  ) {}

  ngOnInit() {
    /*this.tagsService.getAll()
      .subscribe(tags => {
        //this.tags = tags;
        //this.tagsLoaded = true;
        console.log(tags)
      });*/

  }

}
