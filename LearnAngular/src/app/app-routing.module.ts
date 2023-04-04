import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotPoundComponent } from './page-not-pound/page-not-pound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: '**', component: PageNotPoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
