
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AngularmaterialModule} from './angularmaterial/angularmaterial.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],

  exports : [ AngularmaterialModule, ReactiveFormsModule],
})
export class CoreModule { }
