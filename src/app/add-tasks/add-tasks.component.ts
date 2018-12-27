import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs'
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  groupTasks : FormGroup;
  message:string = "values required";

  constructor(private taskService:TaskServiceService) { }

  ngOnInit() {
    this.groupTasks = new FormGroup({
      task: new FormControl('',Validators.required),
      priority: new FormControl('',Validators.required),  
      parentTasks: new FormControl('',Validators.required),
      startDate: new FormControl('',Validators.required),
      endDate: new FormControl() 
    });
  }

  
  createTasks() {
    if (this.groupTasks.valid) {
      this.message = "Tasks has been added successfully";
      this.taskService.createTasks(this.groupTasks.value).subscribe(
          data => {
            this.groupTasks.reset()
            return true;
          }
          ,
            error => {
              return Observable.throw(error);
            }
      )
    } else {
      this.message = "Please fill the details to create tasks";
    }
  }

  resetTasks() {
    this.groupTasks.reset();
  }

  
}
