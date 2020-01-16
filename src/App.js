import React from 'react';
import {connect} from "react-redux"
import './App.css';
import Todo from './components/todo'


function App(props) {

const handleClickComplete=(id)=>{
  props.complete(id)
}
const handleClickDelete=(id)=>{
props.delete(id)
}
const handleClickEdit=(id,aaa)=>{
  props.edit(id,aaa)
}

const handleClickAdd = (todo) => {
  props.add(todo);
}

  return (
    <div className="App">
    <Todo
      handleClickDelete={handleClickDelete}
      handleClickComplete={handleClickComplete}
      handleClickEdit={handleClickEdit}
      handleClickAdd={handleClickAdd}
      tasks={props.tasks}/>
    </div>
  );
}
const mapState=(state)=>{
  return {tasks:state}
}
const mapDispatch=(dispatch)=>{
  return {
    delete:(id)=>dispatch({type:"DELETE",payload:id}),
    complete:(id)=>dispatch({type:"COMPLETE",payload:id}),
    edit:(id,aaa)=>dispatch({type:"EDIT",payload:{id:id,aaa:aaa}}),
    add:(bbb)=>dispatch({type:"ADD",text:bbb})
  }
}
export default connect(mapState,mapDispatch)(App);
