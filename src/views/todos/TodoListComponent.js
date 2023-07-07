import React from "react";
import "./TodoList.scss";
import AddTodo from "./AddTodo";
import TodoChild from "./TodoChild";
import { toast } from "react-toastify";
class TodoListComponent extends React.Component {
  state = {
    todoList: [
      {
        id: "100",
        title: "Coding",
      },
      {
        id: "101",
        title: "Learning English",
      },
      {
        id: "102",
        title: "Doing housework",
      },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      todoList: [...this.state.todoList, todo],
    });
  };

  deleteATodo = (job) => {
    let currentTodo = this.state.todoList.filter((item) => item.id !== job.id);
    this.setState({
      todoList: currentTodo,
    });
  };

  updateTodo = (todo) => {
    let { editTodo, todoList} = this.state
    let isEmptyObject = Object.keys(editTodo).length === 0;

    if( !isEmptyObject && editTodo.id === todo.id) {
      let todoListCopy = [...todoList]
      let objIndex = todoListCopy.findIndex((item) => item.id === todo.id)
      todoListCopy[objIndex].title = editTodo.title

      this.setState({
        todoList: todoListCopy,
        editTodo: {}
      })
      toast.success("Update successfully")
      return
    }
    this.setState({
      editTodo: todo,
    });
  };

  handleChangeUpdateInput =(event)=> {
    let editTodoCopy = {...this.state.editTodo}
    editTodoCopy.title = event.target.value
    this.setState({
      editTodo: editTodoCopy
    })
  }

  render() {
    let { editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;

    return (
      <div className="todo-list-container">
        <p>SIMPLE TODO APP</p>
        <AddTodo addNewTodo={this.addNewTodo} />
        <TodoChild
          todoList={this.state.todoList}
          deleteATodo={this.deleteATodo}
          updateTodo={this.updateTodo}
          isEmptyObject = {isEmptyObject}
          editTodo = {editTodo}
          handleChangeUpdateInput={this.handleChangeUpdateInput}
        />
      </div>
    );
  }
}

export default TodoListComponent;
