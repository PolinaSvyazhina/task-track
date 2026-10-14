import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButton, TuiInput } from '@taiga-ui/core';
import { TuiDay } from '@taiga-ui/cdk';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task, taskPriority } from '../../pages/task/interfaces/task.interface';
import { TuiInputDate } from '@taiga-ui/kit';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.component.html',
  styleUrl: 'task-form.component.scss',
  imports: [
    TuiInput,
    ReactiveFormsModule,
    TuiButton,
    TuiInputDate,
    RouterLink
  ]
})
export class TaskFormComponent {
  private readonly taskService: TaskService = inject(TaskService);
  private readonly router = inject(Router);
    public title = new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),]
    })
  public description =  new FormControl('', {
      nonNullable: true,
    })
  public priority =  new FormControl<taskPriority>('normal', {
      nonNullable: true,
    })
  public assigneeId =  new FormControl('', {
      nonNullable: true,
    })
  public dueDate = new FormControl<TuiDay | null>(null);
  public subtasks =  new FormControl<any>([], {
      nonNullable: true,
    })

  public addSubTask = () => {
      this.subtasks.setValue(this.subtasks.value)
      if (this.subtasks.invalid) {
        return;
      }

    this.subtasks.value.push(
        new FormControl(this.subtasks.value, { nonNullable: true }),
      );
    this.subtasks.markAsDirty();

    this.subtasks.reset();

  }
  public addTask(): void {
      const data: Task = {
        id: crypto.randomUUID(),
        title: this.title.value,
        description: this.description.value,
        priority: this.priority.value,
        dueDate: this.dueDate.value?.toJSON() ?? null,
        assigneeId: this.assigneeId.value,
        status: 'todo',
        subtasks: this.subtasks.value
      }
      this.taskService.addTask(data);

      this.resetControl();
      // void this.router.navigate(['/task-list']);
  }

  private resetControl(): void {
      this.title.reset();
      this.description.reset();
      this.priority.reset();
      this.assigneeId.reset();
      this.dueDate.reset();
      this.subtasks.reset();
  }
}
