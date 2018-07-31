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

  ngOnInit() {
    DependencyResolverService.getUtilityService().onTitleChanged.subscribe(args => {
      this.title = args.value.title;
      this.items = args.value.items; 
    });
  }

}
