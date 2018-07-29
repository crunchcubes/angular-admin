import { Component, HostBinding, OnInit } from '@angular/core';
import {DependencyResolverService} from '../../core';


@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent implements OnInit {
  title:string;
  items:any;
  constructor() {
  }

  ngOnInit() {/*
    DependencyResolverService.getUtilityService().onTitleChanged.subscribe(args => {
      this.title = args.value;
    });

    DependencyResolverService.getUtilityService().onNavigationChange.subscribe(args => {
      console.log(args);
      this.items = args.value; 
    });*/
  }

}
