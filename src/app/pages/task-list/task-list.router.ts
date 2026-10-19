import {  Routes } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { AboutComponent } from '../../components/about/about.component';
import { TaskDetailsComponent } from '../../components/task-details/task-details.component';

export const TASK_List_ROUTER: Routes = [
  {
    path: '',
    component: TaskListPage,
    pathMatch: 'full',
  },
  {
    path: 'tasks/:id',
    loadComponent:() => import('../../components/task-details/task-details.component').then(module => module.TaskDetailsComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('../../components/about/about.component')
      .then(module => module.AboutComponent)
  },
  {
    path:'task-form',
    loadComponent: () => import('../../components/task-form/task-form.component')
      .then(module => module.TaskFormComponent),
  }
]
