import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { EditTasksComponent } from './edit-tasks/edit-tasks.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { TaskPipePipe } from './task-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TaskServiceService} from './task-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    EditTasksComponent,
    AddTasksComponent,
    TaskPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
