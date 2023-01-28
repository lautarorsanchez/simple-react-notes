import { useState, useContext } from "react";
import {TaskContext} from "../context/TaskContext";




export function Form() {
  const {createTask} = useContext(TaskContext)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
 

  const handleForm = (e) => {
    e.preventDefault();
    createTask({
      title,
      body,
    })
    setTitle('')
    setBody('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3 text-center">Write your task</h1>
      <form className='bg-zinc-600 p-10 mb-4'onSubmit={handleForm}>
        <input className ='bg-slate-300 p-3 w-full mb-2'
        placeholder="Task title" onChange={(e) => setTitle(e.target.value)}
        value={title} />
        <textarea
        className ='bg-slate-300 p-3 w-full mb-2'
          placeholder="Write your task"
          onChange={(e) => setBody(e.target.value)
          }
          value={body}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 w-full text-white rounded-md hover:bg-indigo-400">SAVE</button>
      </form>
    </div>
  );
}
