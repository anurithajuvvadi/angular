import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { OthersComponent } from './others/others.component';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [
  {
  path:'user',
  component:UserComponent
},
{
  path:'admin',
  children:[
    {
    path:'child1',
    component:Child1Component
    }
  ] 
},
{
  path:'others',
  component:OthersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
