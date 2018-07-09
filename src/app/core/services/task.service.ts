import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators/map';

import { Task } from '../models';

@Injectable()
export class TaskService {
  constructor (
    private apiService: ApiService
  ) {}

  /*
  getAll(): Observable<[string]> {
    return this.apiService.get('/api/task/gettasks')
          .pipe(map(data => data));
  }*/

  getAll(): Observable<[Task]> {
    return this.apiService.get('/api/task/gettasks')
      .pipe(map((data: {tasks: [Task]}) => data.tasks));
  }

}