import { computed, inject, Injectable, signal } from '@angular/core';
import { Task, taskStatus } from '../pages/task/interfaces/task.interface';
import { ApiService } from './api.service';
import { catchError, finalize, of, tap } from 'rxjs';
import { tasks } from './tasks';

@Injectable({ providedIn: 'root' })
export class TaskService {
private apiService: ApiService = inject(ApiService);

  private readonly tasksState =
    signal<readonly Readonly<Task>[]>([]);
  private readonly loadingState = signal(false);
  private readonly errorState = signal<string | null>(null);
  private taskListMock = tasks;

  readonly taskList = this.tasksState.asReadonly();
  readonly loading = this.loadingState.asReadonly();
  readonly error = this.errorState.asReadonly();

  public getTasks(){
    this.loadingState.set(true);
    this.errorState.set(null);

    return this.apiService.getTasks()
      .pipe(
        catchError(() => of(this.taskListMock)),
        tap(tasks => {
          this.tasksState.set(tasks ?? this.taskListMock);
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

  public deleteTask(id: string): void {
    this.tasksState.update(tasks => tasks.filter(task => task.id !== id));
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
