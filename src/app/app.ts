import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiButton, TuiRoot } from '@taiga-ui/core';
import { TaskComponent } from './components/task/task.component';
import { Task } from './components/task/interfaces/task.interface';

@Component({
  imports: [RouterOutlet, TuiRoot, TaskComponent],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
})
export class App {
  public tasks: Task[] = [{
    id: 'task-01',
    projectId: 'project-01',
    title: 'Собрать первый экран',
    description: 'Добавить шапку, основную область и футер',
    status: 'todo',
    priority: 'normal',
    assigneeId: null,
    dueDate: null,
  }];

  public updateTaskStatus(data: any) {

  }
}
