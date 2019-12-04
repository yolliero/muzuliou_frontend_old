import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGaurdService } from '../core/services/auth-gaurd.service';
import {AddEcmeComponent} from './add-ecme/add-ecme.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
                { path: 'createEcme',
                  component: AddEcmeComponent,
                },
                { path: 'dashboard',
                  component: DashboardComponent,
                },
                { path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
              },

              ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
