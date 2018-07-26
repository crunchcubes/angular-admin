import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UtilityService {
  private title:string;

  constructor () {}

  @Output() change: EventEmitter<string> = new EventEmitter();

  setTitle(title: string) {
    this.title = title;
    this.change.emit(this.title);
  }
  getTitle(): string{
    return this.title;
  }
}