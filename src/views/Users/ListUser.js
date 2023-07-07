import React from "react";
import axios from "axios";
import './ListUser.scss'
import withRouter from "../withRouter";

class ListUser extends React.Component {
  state = {
    listUsers: []
  }
  
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
        listUsers: res && res.data && res.data.data ? res.data.data : []
    })
  }

  handleClickDetailuser = (user) => {
    this.props.router.navigate(`${user.id}`)
  }
  render() {
    let {listUsers} = this.state

    return <div className="list-user-container">
        <div className="title">Fetch all users</div>
        <div className="list-user-component">
        {
            listUsers && listUsers.length > 0 
            && listUsers.map((item, index) => {
                return (
                    <div className="child" key={index} onClick={() => {this.handleClickDetailuser(item)}}>{index +1 } - {item.first_name} {item.last_name}</div>
                )
            })
        }
        </div>
    </div>;
  }
}
export default withRouter(ListUser);
