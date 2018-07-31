import {OnInit } from '@angular/core';
import {DependencyResolverService} from '../core';

export class BaseComponent implements OnInit {   
  protected loaded: boolean;
  constructor() {
      
  }

  setNavigation(title:string, items:any[]){
    DependencyResolverService.getUtilityService().setNavigation(title, this.getBreadCrumb(items));
  }

  getTitle():string{
    return DependencyResolverService.getUtilityService().getTitle();
  }

  getBreadCrumb(items:any[]){
    let mergeItems = [{name: 'Home', link: '/home', type : ''}].concat(items);
    return mergeItems;
  }

  ngOnInit() {  
    
  }

}
