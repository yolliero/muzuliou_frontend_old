import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],

  exports : [ AngularmaterialModule, FormsModule],
})
export class CoreModule { }
