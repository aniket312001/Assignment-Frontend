import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'login' , pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'employeeList', component:EmployeeListComponent},
  {path:'add-employee', component:AddEmployeeComponent},
  {path:'add-employee/:id', component:AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
