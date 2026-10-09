import { Component, inject } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TaskComponent } from '../task/task.component';
import { taskStatus } from '../task/interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  imports: [TaskComponent, TuiButton],
})

export class TaskListComponent {
  private readonly taskService: TaskService = inject(TaskService);
  public readonly taskList = this.taskService.taskList;

  public onStatusChange(event: { id: string; status: taskStatus }): void {
    this.taskService.changeStatus(event.id, event.status);
  }

  public addExampleTask(): void {
    this.taskService.addTask({
      id: crypto.randomUUID(),
      projectId: 'project-01',
      title: 'Учебная задача',
      description: 'Добавлена через TaskService',
      status: 'todo',
      priority: 'normal',
      assigneeId: null,
      dueDate: null,
    });
  }
}
