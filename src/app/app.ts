import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  imports: [RouterOutlet, TuiRoot, TaskListComponent],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
})
export class App {

}
