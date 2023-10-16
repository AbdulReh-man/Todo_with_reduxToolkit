import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updatetodo } from "../features/todo/todoslice";

function Update() {
  const { id } = useParams();
  const {todos} = useSelector((state) => state.todos);
  const get = todos.filter((todo) => todo.id == (id));
  const {name, text} = get[0];
  const [uname, setUname] = useState(name);
  const [utext, setUtext] = useState(text);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const updatetod = (event) => {
    event.preventDefault();
    if(uname.length > 0 && utext.length > 0){
    dispatch(updatetodo({id: id, name:uname, text:utext}))
    nav("/")
    }
    else{
        alert("Fill The Fields")
    }
  };
  return (
    <form className="gap-4 mt-12 flex justify-center my-10 flex-wrap"  onSubmit={updatetod}>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 
      focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3
       leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Update Name..."
        value={uname}
        onChange={(e)=>setUname(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 
      focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3
       leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Update Text..."
        value={utext}
        onChange={(e)=>setUtext(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none
       hover:bg-indigo-600 rounded text-lg"
      >
        Update Todo
      </button>
    </form>
  );
}

export default Update;
