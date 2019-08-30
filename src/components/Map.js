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
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
