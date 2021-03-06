import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Login extends Component {
    state = {
        email: "",
        username: "",
        password: "",
        status: 0
    };

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
    
    submitHandler = e => {
        e.preventDefault();
        axios
        .post('https://csbw-1.herokuapp.com/api/login', this.state)
        .then(res => {
            console.log('response', res)
            const token = res.data['key'];
            localStorage.setItem('token', `Token ${token}`);
            // this.props.history.push('/adventure');
        })
        .catch(err => {
            const error = JSON.stringify(err);
            if (error.includes('401')) {
                this.setState({ status: 401})
            }
        });
    }


  render() {
    return (
        <div className="login-page">
            <div className="outer-div">
            <div className="link-buttons">
                <Link to={`/`}>Login</Link>
                <Link to={`/register`}>Register</Link>
            </div>
            <div className="inner-div">
                <form className="form-div" onSubmit={this.submitHandler}>
                    <input
                    value={this.state.username}
                    onChange={this.inputChangeHandler}
                    type="text"
                    placeholder="Username"
                    name="username"
                    />
                    <input
                    value={this.state.password}
                    onChange={this.inputChangeHandler}
                    type="password"
                    placeholder="Password"
                    name="password"
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
            </div>
            <p style={ this.state.status === 401 ? 
                { color: "red", textAlign: "center", marginTop: "20px" } : { display: "none" } }>
                Invalid username or password.
            </p>
        </div>
    );
  }

}




export default Login;  