import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularMaterialModule, HeaderComponent],
  exports: [AngularMaterialModule,HeaderComponent],
})
export class SharedModule {}
