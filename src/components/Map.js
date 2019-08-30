import React, { Component } from 'react'
import axios from 'axios';


export default class Map extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rooms: [],
             
        }
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
                
            </div>
        )
    }
}
