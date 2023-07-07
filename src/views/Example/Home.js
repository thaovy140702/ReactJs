import React from "react";
import Color from "../HOC/Color";
import image from "../../assets/images/image.jpg"
import { connect } from "react-redux";

class Home extends React.Component {

    handleDeleteUser = (user) => {
        console.log(user)
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log(this.props)
        let userList = this.props.dataRedux
        return (
            <>
            <div>
                Hello guys, this is home page 
            </div>
            <div>
                <img src={image} alt="ip" style={{ width: 70}}/>
            </div>
            { userList.map((item, index) => (
                <div key={item.id}> {index + 1}. {item.name} <button onClick={() => {this.handleDeleteUser(item)}}>x</button>
                </div>
            ))
                }
                <div>
                <button onClick={() => {this.handleCreateUser()}}>+</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {dataRedux: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({ type: 'CREATE_USER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))