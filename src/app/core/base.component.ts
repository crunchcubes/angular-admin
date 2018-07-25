import {OnInit } from '@angular/core';
import {UtilityService } from '../core';

export class BaseComponent implements OnInit {   
  protected util:UtilityService;
  protected tagsLoaded: boolean;
  constructor() {
    this.util = new UtilityService();
  }

  ngOnInit() {  
    console.log(this.util.getTitle());
  }

}
