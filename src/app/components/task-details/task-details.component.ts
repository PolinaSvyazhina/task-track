import { Component, computed, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Task } from '../../pages/task/interfaces/task.interface';
import { TaskComponent } from '../../pages/task/task.component';

@Component({
  selector: 'task-details',
  templateUrl: 'task-details.component.html',
  imports: [
    TaskComponent,
    RouterLink
  ]
})

export class TaskDetailsComponent {
  private routerActive = inject(ActivatedRoute)
  private readonly taskService = inject(TaskService);

  private params = toSignal(this.routerActive.paramMap, {
    initialValue: this.routerActive.snapshot.paramMap,
  })

  readonly taskId = computed(() => this.params().get('id'));

  public task = computed(() => {
    const id = this.taskId();


    return this.taskService.taskList().find((task: Task) => task.id === id);
  })

  public  changeStatus(event: any): void {
    this.taskService.changeStatus(event.id, event.status);
  }
}
