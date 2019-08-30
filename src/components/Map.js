import React, { Component } from 'react'
import axios from 'axios';

import up from '../assets/up.png';
import down from '../assets/down.png';
import left from '../assets/left.png';
import right from '../assets/right.png';


export default class Map extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rooms: [],
             newRoom: []
             
        }

    }

    getRooms = () => {
        axios
        .get('https://csbw-1.herokuapp.com/api/adv/draw')
        .then(res=>{
            this.setState({
                rooms: res.data 
            })
        })
        .catch(err => {
            console.log(err.response);
          });

    }

    navigate = (str) => {
        axios
        .post('https://csbw-1.herokuapp.com/api/adv/move', str)
        .then(res=>{
            this.setState({
                newRoom: res.data
            })

        })
        .catch(err => {
            console.log(err.response);
          });
    }

    componentDidMount() {
        this.init();
    }
    
    init= () => {
        axios.get('https://csbw-1.herokuapp.com/api/adv/draw')
        .then(res => {
           this.setState({
               rooms: res.data
           })
           console.log('rooms', res.data)
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
            <div>
                <div>
                    <button onClick={() => this.navigate("n")}><img src={up} alt="up"/></button>
                    <button onClick={() => this.navigate("n")}><img src={down} alt="down"/></button>
                    <button onClick={() => this.navigate("n")}><img src={left} alt="left"/></button>
                    <button onClick={() => this.navigate("n")}><img src={right} alt="right"/></button>
                </div>
            </div>
        )
    }
}
