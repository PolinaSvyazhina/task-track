import {  Routes } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { AboutComponent } from '../../components/about/about.component';
import { TaskDetailsComponent } from '../../components/task-details/task-details.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';

export const TASK_List_ROUTER: Routes = [
  {
    path: '',
    component: TaskListPage,
    pathMatch: 'full',
  },
  {
    path: 'tasks/:id',
    component: TaskDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path:'task-form',
    component: TaskFormComponent,
  }
]
