import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGaurdService } from './core/services/auth-gaurd.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
   loadChildren: () => import(`./home/home.module`).then(m => m.homeModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
