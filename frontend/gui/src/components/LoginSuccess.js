import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class LoginSuccess extends Component{
    
    render() {
        {/*setState({
           loginstatus:true 
        });*/}

        
        return (
            <div>
                <h1>Login Success!</h1>
                {/*<h2>{{ is }}</h2>*/}
                <NavLink to={{
                    pathname: '/',
                }}>
                    <Button >홈으로 돌아가기</Button>
                </NavLink>
            </div>
        );
    }
}

export default LoginSuccess;