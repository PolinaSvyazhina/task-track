import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiRadio } from '@taiga-ui/core';
import { Task, taskStatus } from './interfaces/task.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'task-component',
  templateUrl: 'task.page.html',
  imports: [
    FormsModule,
    TuiRadio,
    DatePipe,
  ],
  styleUrls: ['task.page.less']
})

export class TaskPage {
  public readonly taskStatuses: readonly taskStatus[] = ['todo', 'in-progress', 'done'];
  public task: InputSignal<Task | undefined> = input();
  public changeStatus: OutputEmitterRef<{ id: string; status: taskStatus }> = output();


  public changeTaskStatus(id: string, status: taskStatus): void {
    const data = {id, status};
    this.changeStatus.emit(data);
  }
}
