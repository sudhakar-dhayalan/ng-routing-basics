import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentLisComponent} from './department-list/department-lis.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentLisComponent},
  {path: 'employees', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentLisComponent, EmployeeListComponent];
