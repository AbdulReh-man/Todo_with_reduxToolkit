import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addtodo, deletetodo, deleteall} from '../features/todo/todoslice'
import { Link } from 'react-router-dom';

function Addtodo() {
    const [name, setName]=useState('');
    const [text, setText]=useState('');
    const dispatch= useDispatch();
    const addtod =(e)=>{
        e.preventDefault(); 
        if(name.length > 0 && text.length > 0){
          dispatch(addtodo({name:name , text:text}))
          setName('');
          setText(''); 
        }
        else{
          alert("Fill The Fields")
        }
    }

    const {todos} = useSelector((state) => state.todos);
  return (
    <div >
      <form onSubmit={addtod} className="gap-4 mt-12 flex justify-center my-10 flex-wrap ">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Name...."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>

    <div className={`${todos.length>0 ?"block " : "hidden"} `}>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th className="px-6 py-3 text-center">
                    Name
                </th>
                <th  className="px-6 py-3 text-center">
                    Text
                </th>
                <th className="text-center p-0">
                  Delete/Update
                </th>
            </tr>
        </thead>
    
    <tbody >
      {
        todos.map((todo)=> (
          <tr  key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          
          <td className="px-6 py-4 text-center ">
          {todo.name}
          </td>
          <td className="px-6 py-4 text-center">
          {todo.text}
          </td>
          <td className=" py-4 text-center space-x-1">
          <button 
          className='text-white bg-indigo-500 border-0 py-0 px-1 
          focus:outline-none hover:bg-indigo-600 rounded text-lg'
          onClick={()=>dispatch(deletetodo(todo.id))}
          >❌</button>
          <Link to={`/update/${todo.id}`}
          className='text-white bg-indigo-500 border-0 py-[0.1rem] px-1 
          focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            ✏️
          </Link>
          </td>
          </tr>
          ))
         }
    </tbody>
    </table>

    <div className='flex justify-center mt-6'>
    <button
        className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={()=> dispatch(deleteall())}
      >
        DELETE ALL
      </button>
    </div>
    </div>
   
    </div>

  )
}

export default Addtodo;