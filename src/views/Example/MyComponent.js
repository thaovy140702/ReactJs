import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "1",
        title: "Developer",
        salary: "700",
      },
      {
        id: "2",
        title: "Tester",
        salary: "500",
      },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs,job]
    })
  }

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs
    currentJobs = currentJobs.filter(item => item.id !== job.id)
    this.setState({
      arrJobs: currentJobs
    })
  }

  componentDidMount() {
    console.log("component did mount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update", "previous state", prevState, "current", this.state)
  }


  render() {
    console.log("render")
    return (
      <>
       <AddComponent addNewJob={this.addNewJob}/>
        <ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob}/>
      </>
    );
  }
}

export default MyComponent;
