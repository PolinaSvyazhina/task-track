import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiInputDirective } from '@taiga-ui/core';
import { TaskService } from '../../services/task.service';
import { Task, taskPriority } from '../task/interfaces/task.interface';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.component.html',
  imports: [
    TuiInputDirective,
    ReactiveFormsModule,
    TuiButton
  ]
})
export class TaskFormComponent {
  private readonly taskService: TaskService = inject(TaskService);
    public title = new FormControl('', {
      nonNullable: true,

    })
  public description =  new FormControl('', {
      nonNullable: true,
    })
  public priority =  new FormControl<taskPriority>('normal', {
      nonNullable: true,
    })

  public addTask(): void {
      const data: Task = {
        id: crypto.randomUUID(),
        title: this.title.value,
        description: this.description.value,
        priority: this.priority.value,
        status: 'todo',
      }
      this.taskService.addTask(data);

      this.resetControl();
  }

  private resetControl(): void {
      this.title.reset();
      this.description.reset();
      this.priority.reset();
  }
}
