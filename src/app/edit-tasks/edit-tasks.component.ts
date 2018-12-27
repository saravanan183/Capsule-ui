import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs'
import { TaskServiceService } from '../task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {

  public task;

  editFormGroup : FormGroup;
  validMessage: string = "";

  constructor(private taskService:TaskServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.editFormGroup = new FormGroup({
      taskId: new FormControl('',Validators.required),
      priority: new FormControl('',Validators.required),
      parentTask: new FormControl('',Validators.required),
      startDate: new FormControl('',Validators.required),
      taskDesc:  new FormControl('',Validators.required),
      endDate: new FormControl()
  });
  this.getEditTask(this.route.snapshot.params.id);
}
  

  getEditTask(id: number) {
    var getData = this;
  this.taskService.getTasksById(id).subscribe(
      data => {
       // console.log(data);
       getData.task = data
          this.populateTaskForm()
      },
      err => console.error(err),
      () => console.log('task loaded')
  );

}

populateTaskForm() {
  
  this.editFormGroup.controls['taskId'].setValue(this.task.taskId);
  this.editFormGroup.controls['parentTask'].setValue(this.task.parentTask);
  this.editFormGroup.controls['priority'].setValue(this.task.priority);
  this.editFormGroup.controls['startDate'].setValue(this.task.startDate);
  this.editFormGroup.controls['taskDesc'].setValue(this.task.tasks);
  this.editFormGroup.controls['endDate'].setValue(this.task.endDate);
}

editTask() {
  if (this.editFormGroup.valid) {
    this.validMessage = "Task has been updated successfully";
    this.taskService.updateTasks(this.editFormGroup.value).subscribe(
            data => {
          this.editFormGroup.reset()
          return true;
        },
            error => {
          return Observable.throw(error);
        }
    )
  } else {
    this.validMessage = "Please fill out the tasks before submitting";
  }

}

}
