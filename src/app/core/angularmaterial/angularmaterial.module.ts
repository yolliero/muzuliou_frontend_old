import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInput,
        MatFormFieldModule,
        MatButtonModule,
        MatGridListModule  } from '@angular/material';



@NgModule({
  declarations: [MatInput],
  imports: [
    CommonModule
  ],
  exports : [MatInput, MatFormFieldModule, MatButtonModule, MatGridListModule  ]
})
export class AngularmaterialModule { }
