import React, { Component } from 'react';
import Poststable from './Poststable';
import './Place.css';

class Posts extends Component{
   
    render() { 
        
        return (
            <div className="full">
                <Poststable boardnum={this.props.location.state.num}/>
            </div>
        );
    }
}

export default Posts;