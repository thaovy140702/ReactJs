import React from "react";
import { toast } from "react-toastify";

class TodoChild extends React.Component {
  handleDeleteTodo = (todo) => {
    this.props.deleteATodo(todo);
    toast.success("Delete successfully");
  };

  handleUpdateTodo = (todo) => {
    this.props.updateTodo(todo);
  };

  handleOnChangeUpdateInput = (event) => {
    this.props.handleChangeUpdateInput(event)
  }

  render() {
    let { todoList, isEmptyObject, editTodo } = this.props;
    return (
      <div className="todo-list-content">
        {todoList.map((item, index) => (
          <div className="todo-child" key={item.id}>
            {isEmptyObject ? (
              <span className="todo-title">
                {index + 1}. {item.title}
              </span>
            ) : (
              <>
                {editTodo.id === item.id ? (
                    <>{index+1}. <input value={editTodo.title} onChange={(event) => {this.handleOnChangeUpdateInput(event)}}/></>
                  
                ) : (
                  <span className="todo-title">
                    {index + 1}. {item.title}
                  </span>
                )}
              </>
            )}
            { <button
              className="btn-edit"
              onClick={() => this.handleUpdateTodo(item)}
            >
              { !isEmptyObject && editTodo.id === item.id ? 'Save' : 'Edit'}
            </button>}
            <button
              onClick={() => {
                this.handleDeleteTodo(item);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoChild;
