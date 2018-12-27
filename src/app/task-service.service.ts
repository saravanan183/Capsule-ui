import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tasks } from "./tasks";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient) { }

  baseUrl: string = 'http://localhost:8081/capsuleproject';

  getTasks() {
    return this.http.get<tasks[]>(this.baseUrl+'/'+'printalltasks');
    }

  getTasksById(taskId: number) {
    return this.http.get<tasks>(this.baseUrl + '/findtasks/' + taskId);
  }

  createTasks(addtasks: tasks) {
    let body = JSON.stringify(addtasks);
   return this.http.post(this.baseUrl+'/addtasks/', body,httpOptions);
  }

  updateTasks(updatetasks: tasks) {
    let body = JSON.stringify(updatetasks);
    return this.http.put(this.baseUrl+'/updatetasks/', body,httpOptions);
  }

  deleteTasks(taskId: number) {
    return this.http.delete(this.baseUrl+'/deletetasks' + '/' + taskId);
  }
}
