import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiRadio } from '@taiga-ui/core';
import { Task, taskPriority, taskStatus } from './interfaces/task.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'task-component',
  templateUrl: 'task.component.html',
  imports: [
    FormsModule,
    TuiRadio,
    DatePipe,
  ],
  styleUrls: ['task.css']
})

export class TaskComponent {
  public readonly taskStatuses: readonly taskStatus[] = ['todo', 'in-progress', 'done'];
  public readonly statusLabels: Record<taskStatus, string> = {
    todo: 'К выполнению',
    'in-progress': 'В работе',
    done: 'Готово',
  };
  public readonly priorityLabels: Record<taskPriority, string> = {
    low: 'Низкий',
    normal: 'Обычный',
    high: 'Высокий',
  };
  public task: InputSignal<Task | undefined> = input();
  public changeStatus: OutputEmitterRef<{ id: string; status: taskStatus }> = output();


  public changeTaskStatus(id: string, status: taskStatus): void {
    const data = {id, status};
    this.changeStatus.emit(data);
  }
}
