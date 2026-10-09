import { Task } from '../components/task/interfaces/task.interface';

export const INITIAL_TASKS: Task[] = [
  {
    id: 'task-01',
    projectId: 'project-01',
    title: 'Собрать первый экран',
    description: 'Добавить шапку, основную область и футер',
    status: 'todo',
    priority: 'normal',
    assigneeId: null,
    dueDate: '2001-09-12',
  }
];
