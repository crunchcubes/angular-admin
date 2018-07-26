import {OnInit } from '@angular/core';
import {UtilityService } from '../core';
import {DependencyResolverService} from '../core';

export class BaseComponent implements OnInit {   
  protected tagsLoaded: boolean;
  constructor() {

  }

  setTitle(title:string){
    DependencyResolverService.getUtilityService().setTitle(title);
  }

  ngOnInit() {  
    
  }

}
