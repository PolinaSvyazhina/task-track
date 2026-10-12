import { Component, inject } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TaskPage } from '../task/task.page';
import { taskStatus } from '../task/interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.page.html',
  imports: [TaskPage, TuiButton],
})

export class TaskListPage {
  private readonly taskService: TaskService = inject(TaskService);
  private router: Router = inject(Router);
  public readonly taskList = this.taskService.taskList;
  public readonly loader = this.taskService.loading;
  public readonly error = this.taskService.error;

  public onStatusChange(event: { id: string; status: taskStatus }): void {
    this.taskService.changeStatus(event.id, event.status);
  }

  public addExampleTask(): void {
   this.router.navigate(['/task-list/task-form'])
  }

  public navigateToTask(id: string): void {
    this.router.navigate(['/task-list/tasks', id]);
  }
  public retry(): void {
    if (this.loader()) {
      return;
    }
    this.taskService.getTasks().subscribe({ error: () => {} });
  }

}
