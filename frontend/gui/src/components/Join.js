import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './Place.css';
import Csrftoken from './Csrftoken.js';

class Login extends Component{
    render() {
        

        return (
            <div className="place1">
                <h1>Join</h1>
                <div className="joinform">
                    
                    <Form method="POST">
                        <Csrftoken/>
                        <Form.Field>
                            <label>Id</label>
                            <input width='1' name='username'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input name='password1' type='password' placeholder='password' />
                        </Form.Field>
                        <Form.Field>
                            <label>Check your Password</label>
                            <input name='password2' type='password' placeholder='password' />
                        </Form.Field>
                        <Button type='submit'>Join</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;