import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInput,
        MatFormFieldModule,
        MatButtonModule,
        MatGridListModule,  
        } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [MatInput],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports : [MatInput, MatFormFieldModule, MatButtonModule, MatGridListModule,
    MatToolbarModule, MatSidenavModule  ]
})
export class AngularmaterialModule { }
