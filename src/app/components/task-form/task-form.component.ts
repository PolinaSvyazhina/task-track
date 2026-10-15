import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButton, TuiInput } from '@taiga-ui/core';
import { TuiDay } from '@taiga-ui/cdk';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TuiInputDate } from '@taiga-ui/kit';
import { Task, taskPriority } from '../task/interfaces/task.interface';

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
export class TaskFormComponent implements OnInit {
  private readonly taskService: TaskService = inject(TaskService);
  private readonly router = inject(Router);
  public readonly loading = this.taskService.loading;

  public ngOnInit(): void {
    if (!this.loading()) {
      this.taskService.getTasks().subscribe({ error: () => {} });
    }
  }
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
  public readonly subtasks = signal<string[]>([]);
  public readonly newSubtask = new FormControl('', { nonNullable: true });

  public addSubTask(): void {
    const title = this.newSubtask.value.trim();

    if (!title) {
      return;
    }

    this.subtasks.update(subtasks => [...subtasks, title]);
    this.newSubtask.reset();
  }

  public removeSubTask(index: number): void {
    this.subtasks.update(subtasks => subtasks.filter((_, taskIndex) => taskIndex !== index));
  }
  public addTask(): void {
      if (this.loading() || this.title.invalid) {
        this.title.markAsTouched();
        return;
      }

      const data: Task = {
        id: crypto.randomUUID(),
        title: this.title.value,
        description: this.description.value,
        priority: this.priority.value,
        dueDate: this.dueDate.value?.toJSON() ?? null,
        assigneeId: this.assigneeId.value,
        status: 'todo',
        subtasks: [...this.subtasks()]
      }
      this.taskService.addTask(data);

      this.resetControls();
      void this.router.navigate(['/task-list']);
  }

  protected resetControls(): void {
      this.title.reset();
      this.description.reset();
      this.priority.reset();
      this.assigneeId.reset();
      this.dueDate.reset();
      this.subtasks.set([]);
      this.newSubtask.reset();
  }
}
