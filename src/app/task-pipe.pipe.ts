import { Pipe, PipeTransform } from '@angular/core';
import { tasks } from './tasks';

@Pipe({
  name: 'taskPipe',
  pure: false
})
export class TaskPipePipe implements PipeTransform {

  public transform(tasksValue: tasks[], inputTask: number): any {
      if (tasksValue && tasksValue !== undefined) {
        console.log("in filter " + typeof tasksValue + JSON.stringify(tasksValue));
        //return tasksValue.filter(tasksItem => { if (inputTask && tasksItem.taskId === inputTask) {return true;}
        return tasksValue.filter(tasksItem => { if (inputTask && tasksItem.taskId === inputTask) {return true;}
        });
      } else {
        return tasksValue;
      }
    }

}
