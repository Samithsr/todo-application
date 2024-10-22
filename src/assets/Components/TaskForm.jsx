import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTasks}) => {
  const [taskData, settaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

 const checktag = (tag) =>{
  return taskData.tags.some(item => item === tag)
 }
   

  const selectTag = (tag) =>{
    if(taskData.tags.some((item) => item === tag)) {
      const filtertags = taskData.tags.filter(item => item !== tag)

      settaskData(prev => {
        return{...prev, tags: filtertags}
      })
    } else {
      settaskData(prev => {
        return{...prev, tags: [...prev.tags, tag]};
      });
    }
  };


  //reomoving the taskData, tags after setTasks assigned and settask return //
  //  console.log(taskData.tags);

  const handleChange = (e) => {
    // const {name, value} = e.target
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    settaskData((prev) => {
      return { ...prev, [name]: value };
    });

    // settaskData({...taskData,[name]:value})
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev)=>{
      return [...prev, taskData];
    })

    settaskData({
    task: "",
    status: "todo",
    tags: [],
  })
  };

  // const [task, settask]= useState("")
  // const [status, setstatus] = useState("todo")
  // const handleTaskChange = e=> {
  //   settask(e.target.value);
  // };

  // const handleStatusChange = (e)=>{
  //   setstatus(e.target.value)
  // }
  // console.log(task, status);

  return (
    <header className="app_header">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}  
        />

        <div className="task_form_bottom_line">     
          <div>
            <Tag tagName="HTML" select={selectTag} selected={checktag ("HTML")} />
            <Tag tagName="CSS" select={selectTag} selected={checktag ("CSS")} />
            <Tag tagName="React" select={selectTag} selected={checktag ("React")} />
            <Tag tagName="JavaScript" select={selectTag} selected={checktag ("JavaScript")} />            
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_staus"
              onChange={handleChange}
            >
              <option value="todo">ToDo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>  
      </form>
    </header>
  );
};

export default TaskForm;
