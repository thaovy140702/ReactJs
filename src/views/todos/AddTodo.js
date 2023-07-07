import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state={
    title: ''
  }
    handleChangeTitle =(event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleSubmit = () => {
      if(!this.state.title) {
        toast.error("Missing required params")
        return
      }
      let todo = {
        id: Math.floor(Math.random() * 10001),
        title: this.state.title
      }
      this.props.addNewTodo(todo)
      toast.success("Add sucessfully")
      this.setState({
        title: ''
      })
    }
  render() {
    return (
      <div className="add-todo">
        <input type="text" value={this.state.title} onChange={(event) => {this.handleChangeTitle(event)}}/>
        <button className="btn-edit" onClick={() => {this.handleSubmit()}}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
