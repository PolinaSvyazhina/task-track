import { Component, inject, OnInit } from '@angular/core';
import { TuiButton, TuiInputDirective, TuiTextfieldComponent, TuiTextfieldOptionsDirective } from '@taiga-ui/core';
import { TaskComponent } from '../../components/task/task.component';
import { taskStatus } from '../../components/task/interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { TaskSummaryComponent } from '../../components/task-summary/task-summary.component';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.page.html',
  styleUrls: ['task-list.page.scss'],
  imports: [TaskComponent, TuiButton, TaskSummaryComponent, TuiTextfieldComponent, TuiInputDirective, TuiTextfieldOptionsDirective],
})

export class TaskListPage implements OnInit {
  private readonly taskService: TaskService = inject(TaskService);
  private router: Router = inject(Router);
  public readonly taskList =  this.taskService.taskList;

  public readonly loader = this.taskService.loading;
  public readonly error = this.taskService.error;

  public ngOnInit(): void {
    this.taskService.getTasks().subscribe({ error: () => {} });
  }

  public onStatusChange(event: { id: string; status: taskStatus }): void {
    this.taskService.changeStatus(event.id, event.status);
  }

  public addExampleTask(): void {
    void this.router.navigate(['/task-list', 'task-form']);
  }

  public onDeletedCard(id: string): void {
    this.taskService.deleteTask(id);
  }

  public navigateToTask(id: string): void {
    void this.router.navigate(['/task-list', 'tasks', id]);
  }
  public retry(): void {
    if (this.loader()) {
      return;
    }
    this.taskService.getTasks(true).subscribe({ error: () => {} });
  }

}
