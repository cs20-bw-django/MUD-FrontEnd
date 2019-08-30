import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import '../styles/register.css';

// import { Grid, Image } from 'semantic-ui-react'

class Register extends Component {
    state = {
        username: '',
        email: '',
        password1: '',
        password2: ''
    };

    changeHandle = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    submitHandler = e => {
        e.preventDefault();
        axios
        .post('https://csbw-1.herokuapp.com/api/registration/', this.state)
        .then(res => {
            console.log('response', res)
            const token = res.data['key'];
            localStorage.setItem('token', `Token ${token}`);
        })
        .catch(err => {
            console.log('Axios error:', err);
        });
    }

  render() {
    return (
        <main>
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
                    onChange={this.changeHandle}
                    type="text"
                    placeholder="Username"
                    name="username"
                    />
                     <input
                    value={this.state.email}
                    onChange={this.changeHandle}
                    type="text"
                    placeholder="Email"
                    name="email"
                    />
                    <input
                    value={this.state.password}
                    onChange={this.changeHandle}
                    type="password"
                    placeholder="Password"
                    name="password1"
                    />
                    <input
                    value={this.state.password}
                    onChange={this.changeHandle}
                    type="password"
                    placeholder="Re-enter Password"
                    name="password2"
                    />
                    <button onClick={(e) => this.submitHandler(e)}>Create Account</button>
                </form>
            </div>
            </div>
        </div>
        </main>
    );
  }

}

export default Register;