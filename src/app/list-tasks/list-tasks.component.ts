import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../task-service.service';
import { tasks } from '../tasks';
import {Router} from "@angular/router";
//import { TaskPipe } from '../task-pipe.pipe';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  constructor(private router: Router, private taskService:TaskServiceService) { }
  //appTasks: tasks[];
  public tasksList;

  ngOnInit() {
    //this.taskService.getTasks().subscribe(
    //   data =>{this.tasksList = data}
    this.getAllTasks();
   // );
   }

   getAllTasks() {
    this.taskService.getTasks().subscribe(
      data => { this.tasksList = data},
      err => console.error(err),
      () => console.log('tasks loaded')
    );
  }

}
