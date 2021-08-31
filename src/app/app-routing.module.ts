import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './component/department-detail/department-detail.component';
import { DepartmentComponent } from './component/department/department.component';
import { EmployeeComponent } from './component/employee/employee.component';

const routes: Routes = [{
  path: 'department', component: DepartmentComponent
}, {
  path: 'employee', component: EmployeeComponent
}, {
  path: 'department/:id', component: DepartmentDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
