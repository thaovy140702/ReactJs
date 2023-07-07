import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnlickDelete = (job) => {
    this.props.deleteAJob(job)
  }

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {!showJobs ? (
          <div>
            <button
              className="btn-show"
              onClick={() => {
                this.handleShowHide();
              }}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    <> </><span onClick={() => {this.handleOnlickDelete(item)}}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                onClick={() => {
                  this.handleShowHide();
                }}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {

//     let {name, age, arrJobs} = props

//         return (
//           <>
//             Child {name} - {age}
//             <div className="job-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                                 </div>
//                         )
//                     })
//                 }
//             </div>
//           </>
//         );
// }

export default ChildComponent;
