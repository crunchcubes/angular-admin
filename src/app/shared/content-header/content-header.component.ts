import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent implements OnInit {
  title: String
  constructor() { }

  ngOnInit() {
    this.title = 'App Title';
  }

}
