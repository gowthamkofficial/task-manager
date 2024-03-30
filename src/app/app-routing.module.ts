import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedGaurd } from './core/gaurds/protected.guard';
import { NonProtectedGuard } from './core/gaurds/non-protected.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [NonProtectedGuard],
    loadChildren: () =>
      import(`./modules/session/session-routing.module`).then(
        (m) => m.SessionRoutingModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [ProtectedGaurd],
    loadChildren: () =>
      import(`./modules/dashboard/dashboard.module`).then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'task-manager',
    canActivate: [ProtectedGaurd],
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
