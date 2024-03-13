import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskUpdateComponent } from './task-update/task-update.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskCreateComponent,
    TaskViewComponent,
    TaskUpdateComponent
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule
  ]
})
export class TaskManagerModule { }
