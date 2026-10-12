import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Task, taskStatus } from '../pages/task/interfaces/task.interface';
import { ApiService } from './api.service';
import { finalize, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
private apiService: ApiService = inject(ApiService);

  private readonly tasksState =
    signal<readonly Readonly<Task>[]>([]);
  private readonly loadingState = signal(false);
  private readonly errorState = signal<string | null>(null);

  readonly taskList = this.tasksState.asReadonly();
  readonly loading = this.loadingState.asReadonly();
  readonly error = this.errorState.asReadonly();

  public getTasks(){
    this.loadingState.set(true);
    this.errorState.set(null);

    return this.apiService.getTasks()
      .pipe(
        tap({
          next: (tasks) => {
            this.tasksState.set(tasks);
          },
          error: error => {
            this.errorState.set('Не удалось загрузить задачи');
          }
        }),
        finalize(() => {
          this.loadingState.set(false);
        }),
      )
  }
  readonly unfinishedCount = computed(() =>
    this.tasksState()
      .filter(task => task.status !== 'done')
      .length,
  );

  public addTask(task: Task): void {
    this.tasksState.update(tasks => [
      ...tasks,
      { ...task },
    ]);
  }

  public changeStatus(id: string, status: taskStatus): void {
    this.tasksState.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, status }
          : task,
      ),
    );
  }
}
