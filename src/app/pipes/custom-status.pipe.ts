import { Pipe, PipeTransform } from "@angular/core";
import { taskStatus } from '../components/task/interfaces/task.interface';

@Pipe({name: 'customStatus'})

export class CustomStatusPipe implements PipeTransform {
  public readonly statusLabels: Record<taskStatus, string> = {
    todo: 'К выполнению',
    'in-progress': 'В работе',
    done: 'Готово',
  };

  transform(status: taskStatus | undefined): string {
    return this.statusLabels[status ?? 'todo'];
  }
}
