import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { TuiButton, TuiCalendar, TuiDropdownContent, TuiInputDirective } from '@taiga-ui/core';
import { TaskService } from '../../services/task.service';
import { Task, taskPriority } from '../../pages/task/interfaces/task.interface';
import { TuiInputDateDirective } from '@taiga-ui/kit';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.component.html',
  imports: [
    TuiInputDirective,
    ReactiveFormsModule,
    TuiButton,
    TuiCalendar,
    TuiDropdownContent,
    TuiInputDateDirective
  ]
})
export class TaskFormComponent {
  private readonly taskService: TaskService = inject(TaskService);
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
  public dueDate =  new FormControl('', {
      nonNullable: true,
    })
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
        dueDate: this.dueDate.value,
        assigneeId: this.assigneeId.value,
        status: 'todo',
        subtasks: this.subtasks.value
      }
      this.taskService.addTask(data);

      this.resetControl();
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
