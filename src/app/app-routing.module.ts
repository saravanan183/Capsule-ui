import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddTasksComponent} from "./add-tasks/add-tasks.component";
import {ListTasksComponent} from "./list-tasks/list-tasks.component";
import {EditTasksComponent} from "./edit-tasks/edit-tasks.component";

const routes: Routes = [
  { path: '', component: AddTasksComponent },
  { path: 'list-tasks', component: ListTasksComponent },
  { path: 'edit-tasks/:id', component: EditTasksComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
