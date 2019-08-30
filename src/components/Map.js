import React, { Component } from 'react'
import axios from 'axios';


export default class Map extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rooms: [],
             
        }

    }

    getRooms = () => {

    }

    navigate = (str) => {
        axios
        .post('url', str)
        .then()
        .catch()
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
                    <button onClick={() => this.navigate("n")}>up</button>
                    <button onClick={() => this.navigate("s")}>down</button>
                    <button onClick={() => this.navigate("w")}>left</button>
                    <button onClick={() => this.navigate("e")}>right</button>
                </div>
            </div>
        )
    }
}
