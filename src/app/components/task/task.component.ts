import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiRadio } from '@taiga-ui/core';
import { Task, taskPriority, taskStatus } from './interfaces/task.interface';
import { DatePipe } from '@angular/common';
import { CustomStatusPipe } from '../../pipes/custom-status.pipe';

@Component({
  selector: 'task-component',
  templateUrl: 'task.component.html',
  imports: [
    FormsModule,
    TuiRadio,
    DatePipe,
    CustomStatusPipe,
  ],
  styleUrls: ['task.scss']
})

export class TaskComponent {
  public readonly taskStatuses: readonly taskStatus[] = ['todo', 'in-progress', 'done'];

  public readonly priorityLabels: Record<taskPriority, string> = {
    low: 'Низкий',
    normal: 'Обычный',
    high: 'Высокий',
  };
  public task: InputSignal<Task | undefined> = input();
  public changeStatus: OutputEmitterRef<{ id: string; status: taskStatus }> = output();
  public deletedCard: OutputEmitterRef<string> = output();


  public changeTaskStatus(id: string, status: taskStatus): void {
    const data = {id, status};
    this.changeStatus.emit(data);
  }

  public deleteTask(id: string): void {
    this.deletedCard.emit(id);
  }
}
