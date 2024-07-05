import { Component, Input } from '@angular/core';
import Task from '../task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list?: Observable<Task[]>;
  @Input() headers?: string[];
}
