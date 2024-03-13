import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`./modules/session/session-routing.module`).then(
        (m) => m.SessionRoutingModule
      ),
  },
  {
    path:'dashboard',
    loadChildren:()=>import(`./modules/dashboard/dashboard.module`).then((m)=>m.DashboardModule)
  },
  {
    path: 'task-manager',
    loadChildren: () =>
      import(`./modules/task-manager/task-manager-routing.module`).then(
        (m) => m.TaskManagerRoutingModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
