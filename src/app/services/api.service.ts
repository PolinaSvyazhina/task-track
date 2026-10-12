import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../pages/task/interfaces/task.interface';

@Service()
export class ApiService {

  private readonly http = inject(HttpClient);
  private readonly tasksUrl = 'http://localhost:3000/tasks';
  public getTasks() {
    return this.http.get<Task[]>(this.tasksUrl);
  }
}
