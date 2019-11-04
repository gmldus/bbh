import React, { Component } from 'react';
import Write from './Write.js';
import axios from 'axios';

class CreatePost extends Component {

    state={
        persons:[]
    }
    async componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }

    render() {
        return (
            <Write></Write>
        );
    }
}

export default CreatePost;