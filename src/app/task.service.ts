import { Injectable } from '@angular/core';
import Task from './task';
import { TASKS } from './mock-tasks';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = TASKS;

  getTasks(): Observable<Task[]> {
    return of(this.tasks)
      .pipe(delay(300));
  }
}
