import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Place.css';
import Csrftoken from './Csrftoken.js';

class Login extends Component{
    render() {
        
        return (
            <div>
                
                <h1>login</h1>
                
                <div className="loginform">
                    <Form method="POST">
                        <Csrftoken/>
                        <Form.Field>
                            <label>Id</label>
                            <input width='1' name='username' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type='password' name='password' placeholder='password'/>
                        </Form.Field>
                        <Form.Field>
                        </Form.Field>
                        <Button type='submit'>Login</Button>
                        <NavLink to="/join"><Button type='submit'>Join</Button></NavLink>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;