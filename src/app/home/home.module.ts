import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home.component';
import { AddEcmeComponent } from './add-ecme/add-ecme.component';
@NgModule({
  declarations: [DashboardComponent, HomeComponent,
    AddEcmeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,

  ]
})
export class homeModule {
}
