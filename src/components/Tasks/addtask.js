import {useState} from "react";

const AddTask=()=> {
    // define the state of AddTask
    const [task, setTask] = useState({
        taskId:"",
        taskName: "",
        taskDescription: "",
        taskStatus: ""
    })
     const onTextChange=(event)=> {
        setTask({
            ...task,
            [event.target.name]: event.target.value
        })
    }

    const onDisplayTask=()=>{
        console.log(task);
    }

    return(
        <>
            <input type="text" name="taskId" value={task.taskId} onChange={onTextChange}></input>
            <input type="text" name="taskName" value={task.taskName} onChange={onTextChange}></input>
            <input type="text" name="taskDescription" value={task.taskDescription} onChange={onTextChange}></input>
            <input type="text" name="taskStatus" value={task.taskStatus} onChange={onTextChange}></input>
            {/*<button onClick={()=>{console.log(task)}}>Add Task</button>*/}
            <button onClick={onDisplayTask}>Add Task</button>
        </>
    )
}

export default AddTask;