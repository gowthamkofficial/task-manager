import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HeaderComponent,
    LoaderComponent,
    TooltipComponent,
  ],
  exports: [
    AngularMaterialModule,
    HeaderComponent,
    LoaderComponent,
    TooltipComponent,
  ],
})
export class SharedModule {}
