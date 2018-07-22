import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators/map';

import { Project } from '../models';

@Injectable()
export class ProjectService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[Project]> {
    return this.apiService.get('/project/get-projects')
      .pipe(map((data: {projects: [Project]}) => data.projects));
  }

}
