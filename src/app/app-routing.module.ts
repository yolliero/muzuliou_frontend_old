import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGaurdService } from './core/services/auth-gaurd.service';
import { DashboardComponent } from './home/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: 'dashboard',
  component: DashboardComponent,
  pathMatch: 'full',
/*  canActivate: [AuthGaurdService ] */
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
