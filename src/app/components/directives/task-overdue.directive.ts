import { Directive, inject } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Directive({
  selector: '[appOverdue]',
  standalone: true,
  exportAs: 'appOverdue',
  host: {
    '[class.task-overdue]': 'isOverdue()',
  },
})

export class TaskOverdueDirective {
  readonly taskComponent  = inject(TaskComponent);

  public isOverdue(): boolean {

    const currentDate = new Date();
    let endDate
    if (Date.parse(this.taskComponent.task()?.dueDate ?? '') !== Number.NaN) {
      endDate = new Date(this.taskComponent.task()?.dueDate ?? '');
    }

    if (endDate) {
      return currentDate > endDate && this.taskComponent.task()?.status !== 'done';
    }

    return false;
  }
}
