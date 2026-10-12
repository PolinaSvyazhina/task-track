import { Routes } from '@angular/router';
import { TaskListPage } from './pages/task-list/task-list.page';
import { TASK_List_ROUTER } from './pages/task-list/task-list.router';

export const routes: Routes = [
  {
    path: '',
    component: TaskListPage,
    pathMatch: 'full',
  },
  {
    path: 'task-list',
    children: TASK_List_ROUTER,
  }

];
