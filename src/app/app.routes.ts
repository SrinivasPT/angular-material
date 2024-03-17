import { Routes } from '@angular/router';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';

export const routes: Routes = [
    { path: 'employee/:mode', component: EmployeePageComponent }, // mode can be 'edit' or 'view'
    { path: 'employee', component: EmployeePageComponent }, // Default path without mode
];
