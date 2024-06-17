import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PresentedInDashboardComponent } from './Components/presented-in-dashboard/presented-in-dashboard.component';
import { authGuard } from './shared/auth.guard';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';

const routes: Routes = [
  {path: 'LoginPage', component: LoginComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'forgotPassword',component: ForgotPasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent,
    canActivate:[authGuard],
    children:[
      {path:'',redirectTo:"/dashboard/notes",pathMatch:'full'},
      {path:'notes',component:PresentedInDashboardComponent},
      {path:'Archive',component:ArchiveComponent},
      {path:'Trash',component:TrashComponent}
    ]
  },
  {path:'list',component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
