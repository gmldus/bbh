import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Saved extends Component{
    render() {
        
        return (
            <div>
                
                <br/><br/><br/><br/><br/><br/>
                <h1>{this.props.location.state.message}</h1>
                <NavLink to={{
                    pathname: '/posts',
                    state: { 
                        num: this.props.location.state.num
                    }
                }}>
                    <Button >글 목록으로 돌아가기</Button>
                </NavLink>
            </div>
        );
    }
}

export default Saved;