import { computed, Injectable, signal } from '@angular/core';
import { Task, taskStatus } from '../components/task/interfaces/task.interface';
import { INITIAL_TASKS } from './task.data';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly tasksState =
    signal<readonly Readonly<Task>[]>(
      INITIAL_TASKS.map(task => ({ ...task })),
    );

  readonly taskList = this.tasksState.asReadonly();

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
