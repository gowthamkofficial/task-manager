import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HeaderComponent,
    LoaderComponent,
    TooltipComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AngularMaterialModule,
    HeaderComponent,
    LoaderComponent,
    TooltipComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
