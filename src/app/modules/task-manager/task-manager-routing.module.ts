import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: TaskListComponent,
  },
  {
    path: 'create',
    component: TaskCreateComponent,
  },
  {
    path: 'update',
    component: TaskUpdateComponent,
  },
  {
    path: 'view',
    component: TaskViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskManagerRoutingModule {}
