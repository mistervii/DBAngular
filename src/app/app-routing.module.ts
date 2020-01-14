import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './layouts/login/login.component';
import { AdmindashboardComponent } from './modules/admindashboard/admindashboard/admindashboard.component';


const routes: Routes = [{
  path:'',
  component:MainComponent,
  children:[
]
},{
  path:'login',
  component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
