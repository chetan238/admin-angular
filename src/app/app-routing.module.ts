import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewClassName } from '@angular/compiler';
import { combineLatest } from 'rxjs';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

{path:'create',component:AddUserComponent},

{path:'',component:WelcomeComponent},

{path:'list',
children:[

  {path:'',component:ListUsersComponent},
{path:'delete/:id',component:DeleteUserComponent},
{path:'edit/:id',component:EditUserComponent},
{path:'view/:id',component:ViewUserComponent},


]
},
{path:'**',redirectTo:'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
