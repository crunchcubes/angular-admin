import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

import { Task } from '../models';

@Injectable()
export class TaskService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[Task]> {
    return this.apiService.get('/task/get-all')
      .pipe(map((data: {tasks: [Task]}) => data.tasks));
  }

  get(taskId): Observable<Task> {
    return this.apiService.get(`/task/${taskId}`)
      .pipe(map((data: {task: Task}) => data.task));
  }

  add(payload): Observable<Task> {
    return this.apiService
    .post(
      '/task/create',
      { task: { body: payload } }
    ).pipe(map(response => response));
  }

  update(payload): Observable<Task> {
    return this.apiService
    .post(
      '/task/update',
      { task: { body: payload } }
    ).pipe(map(response => response));
  }

}
