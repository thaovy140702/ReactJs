import React from "react";
import withRouter from "../withRouter";
import axios from "axios";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.router && this.props.router.params) {
      let id = this.props.router.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  handleClickBack = () => {
    this.props.router.navigate('/user')
  }
  render() {
    let { user } = this.state;
    let isEmptyObject = Object.keys(user).length === 0;

    return (
      <>
        {!isEmptyObject ? (
          <>
            <div>
              <div>
                User's name: {user.first_name} {user.last_name}
              </div>
              <div>User's email: {user.email}</div>
              <div>
                <img src={user.avatar} alt="user" style={{ width: "60px" }} />
              </div>
              <div>
                <button onClick={() => {this.handleClickBack()}}>Back</button>
              </div>
            </div>
          </>
        ) : (
          <div> User not found</div>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
