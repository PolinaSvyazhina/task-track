import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TuiRadioComponent } from '@taiga-ui/core';
import { Task } from './interfaces/task.interface';

@Component({
  selector: 'task-component',
  templateUrl: 'task.component.html',
  imports: [
  ],
  styleUrls: ['task.component.css']
})

export class TaskComponent {
  public taskList: InputSignal<Task[] | undefined> = input();
  public changeStatus: OutputEmitterRef<any> = output()


  public changeTaskStatus(id: string, status: string): void {
    const data = {id, status};
    this.changeStatus.emit(data);
  }
}
