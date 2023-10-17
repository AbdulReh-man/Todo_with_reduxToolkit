import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
      name: "English",
    },
  ],
};

export const todoslice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        name: action.payload.name
      };
      state.todos.push(todo);
    },

    deletetodo: (state, action) => {
      state.todos = state.todos.filter((value) => value.id !== action.payload);
    },

    updatetodo: (state, action) => {
      const {id, name, text}=action.payload;
      const user = state.todos.find(use=> use.id==id )
      if(user)
      {
        user.name=name
        user.text=text
      }
    },
    deleteall: (state, action)=>{
      state.todos=[]
    }
  }
});

export const { addtodo, deletetodo, updatetodo, deleteall } =todoslice.actions;
export default todoslice.reducer;
