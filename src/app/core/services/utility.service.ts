import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UtilityService {
  private title:string;

  constructor () {}

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  setTitle(title: string) {
    this.title = title;
    this.onChange.emit({sender: this, value: title});
  }
  getTitle(): string{
    return this.title;
  }
}