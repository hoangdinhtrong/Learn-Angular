import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { PageNotPoundComponent } from './Components/Common/page-not-pound/page-not-pound.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '**', component: PageNotPoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
