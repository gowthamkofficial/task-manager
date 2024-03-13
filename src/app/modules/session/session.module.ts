import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, SessionRoutingModule, SharedModule],
  exports: [],
})
export class SessionModule {}
