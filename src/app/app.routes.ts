import { Routes } from '@angular/router';
import { TASK_List_ROUTER } from './pages/task-list/task-list.router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-list',
    pathMatch: 'full',
  },
  {
    path: 'task-list',
    children: TASK_List_ROUTER,
  },
  {
    path: '**',
    redirectTo: 'task-list',
  }

];
