
import React from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task';

const TaskListComponent = (props) => {
    const defaultTask = new Task ('Martin', 'lorem input', true, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Csmbiar estado de una tarea')
    }


  return (
    <div>
    <div>
        Your Tasks:
    </div>
    {/* Todo aplicar un form/map para renderixar un a lista*/}
    <TaskComponent task = { defaultTask}></TaskComponent>
      
    </div>
  )
}



export default TaskListComponent;

