import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-summary',
  templateUrl: 'task-summary.component.html',
  styleUrl: 'task-summary.component.scss',
})

export class TaskSummaryComponent {
  private readonly taskService: TaskService = inject(TaskService);

  readonly tasks = this.taskService.taskList;
  readonly unfinishedCount = this.taskService.unfinishedCount;
}
