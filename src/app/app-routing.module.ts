import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent} from './login/login.component';
import  {DashboardComponent} from './dashboard/dashboard.component';
import  {CurdComponent} from './curd/curd.component';
import  {AddemplyeComponent} from './addemplye/addemplye.component';
import  {EditComponent} from './edit/edit.component';
import  {RegisterComponent} from './register/register.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [

{path:'', component:LoginComponent},
{path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
{path:'crud', component:CurdComponent},
{path:'add', component:AddemplyeComponent},
{path:'edit', component:EditComponent},
{path:'register', component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
