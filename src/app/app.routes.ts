import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path:"course", component:CourseComponent},
    {path:"admin", component:AdminComponent}
];
