import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SelectBoard.css';

class SelectBoard extends Component{
    state={
        status:false,
        num:0
    }
    render() {
        
        return (
            <div className="background">
                <br/><br/><br/><br/><br/><br/>
                <button className="boardbutton one" onClick={function(){
                    this.setState({
                        status:true,
                        num:1
                    });
                }.bind(this)}>첫번째 게시판</button>
                
                <button className="boardbutton two" onClick={function(){
                    this.setState({
                        status:true,
                        num:2
                    });
                }.bind(this)}>두번째 게시판</button>

                <button className="boardbutton three" onClick={function(){
                    this.setState({
                        status:true,
                        num:3
                    });
                }.bind(this)}>세번째 게시판</button>
    
                {this.state.status && <Redirect to={{
                    pathname: '/posts',
                    state: { num:this.state.num }
                }}/>}
            </div>
        );
    }
}

export default SelectBoard;