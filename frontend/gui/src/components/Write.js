import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Button, TextArea, Dropdown } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import './Place.css';


class Write extends Component{
    state = {
        submited_status:false,
        submited_title:"",
        submited_content:"",
        apartment:0,
        selected_board:0
    }

    

    handleFormSubmit(_title,_content) {
        this.setState({
            submited_title:_title,
            submited_content:_content
        });
        if(_title==="" || _content===""){
            this.setState({
                submited_status:false
            });
 
        }
    }
    
    render() {
        if(this.state.selected_board===1){
            axios.post('http://127.0.0.1:8000/api/create/$', 
            {title:this.state.submited_title, content:this.state.submited_content})
            .then( res => { console.log(res) } )
            .catch( error => { console.error(error) } );
        }
        else{
            axios.post('http://127.0.0.1:8000/api'.concat(this.state.selected_board,'/create/$'), 
            {title:this.state.submited_title, content:this.state.submited_content})
            .then( res => { console.log(res) } )
            .catch( error => { console.error(error) } );
        }
        
        console.log(this.state.selected_board);
        
        return (
            
            <div>
                {
                    this.state.submited_status && <Redirect to={{
                        pathname: '/saved',
                        state: { 
                            message:"저장되었습니다",
                            num: this.state.selected_board
                        }
                    }}/>
                }
                <h1>write</h1>
                <div className="writeplace">  
                    

                    <Form method="POST"
                        onSubmit= {function(e){
                            e.preventDefault();
                            this.setState({
                                selected_board:parseInt(e.target.op.value),
                                submited_status:true
                            })
                            this.handleFormSubmit(
                                e.target.title.value,
                                e.target.content.value
                            );

                        }.bind(this)}>

                        <Form.Field>
                            <Form.Field
                                id='form-input-title'
                                control={Input}
                                placeholder='제목을 입력하세요'
                                name='title'
                                maxLength='20'
                            />
                            <select class="ui dropdown" name="op">
                                <option value="0">아파트 선택</option>
                                <option value='1' name="a1">아파트1</option>
                                <option value='2' name="a2">아파트2</option>
                            </select>

                            <TextArea
                                id='form-input-content'
                                placeholder='Tell us more' 
                                style={{ minHeight: 300 }} 
                                name='content'
                                maxLength='500'
                            />
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

export default Write;