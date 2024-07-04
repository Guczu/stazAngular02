import { Component, Input, OnInit } from '@angular/core';
import Task from '../task';
import { TaskService } from '../task.service';
import { delay } from 'rxjs';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  @Input() customTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  ngOnInit() {
    this.taskService.getTasks()
      .pipe(delay(300))
      .subscribe(tasks => this.tasks = tasks);
  }
}
