import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import Task from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks?: Observable<Task[]>;
  headers: string[] = ["Nazwa", "Typ danych", "Liczba zadań"];

  constructor(
    private taskService: TaskService
  ) { }

  reverseOrder =
    (x: KeyValue<string, any>, y: KeyValue<string, any>): number => {
      return -1
    }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }
}
