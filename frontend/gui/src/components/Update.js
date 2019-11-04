import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Update extends Component{
    state={
        updated_status:false,
        updated_title:"",
        updated_content:""
    }
    handleFormUpdate(_title,_content) {
        this.setState({
            updated_title:_title,
            updated_content:_content
        });
        if(_title==="" || _content===""){
            this.setState({
                updated_status:false
            });
 
        }
    }
    render() {
        
        if(this.props.location.state.boardnum===1){
            console.log('render1');
            axios.put('http://localhost:8000/api/'.concat(this.props.location.state.id, '/update/$'), 
            {title:this.state.updated_title, content:this.state.updated_content})
            .then( res => { console.log(res) } )
            .catch( error => { console.error(error) } );
            console.log(this.state.updated_title);
            console.log(this.state.updated_content);
        }
        else{
            
            console.log('render2');
            axios.put('http://localhost:8000/api'.concat(this.props.location.state.boardnum,'/',this.props.location.state.id, '/update/$'), 
            {title:this.state.updated_title, content:this.state.updated_content})
            .then( res => { console.log(res) } )
            .catch( error => { console.error(error) } );
    
            console.log(this.state.updated_title);
        }
        

        return (
            <div>
                <h1>update</h1>
                
                {
                    this.state.updated_status && 
                    <Redirect to={{
                        pathname:'/detail',
                        state:{
                            id: this.props.location.state.id,
                            boardnum:this.props.location.state.boardnum
                        }
                    }}/>
                }
                <div className="writeplace">  
                    <Form method="POST"
                        onSubmit= {function(e){
                            e.preventDefault();
                            this.setState({
                                updated_status:true
                            })
                            this.handleFormUpdate(
                                e.target.title.value,
                                e.target.content.value
                            );
                            
                            
                        }.bind(this)}>

                        <Form.Field>
                            <TextArea
                                id='form-input-title'
                                control={Input}
                                name='title'
                                maxLength='20'
                                rows='1'
                                cols='50'
                            >{this.props.location.state.title}</TextArea>
                            <br></br>
                            <TextArea
                                id='form-input-content'
                                placeholder='Tell us more' 
                                style={{ minHeight: 300 }} 
                                name='content'
                                maxLength='500'
                            >{this.props.location.state.content}</TextArea>
                        </Form.Field>
                        
                        <Form.Field
                            id='form-button'
                            control={Button} 
                            type="submit"
                            content='저장'
                        />
                    </Form>
                </div>
            </div>
        );
    }
}

export default Update;