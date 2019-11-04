import React, { Component } from 'react';
import { Divider, Segment, Button } from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';
import './Place.css';
import axios from 'axios';

class Detail extends Component {
    state = {
        deleted:false,
        updated:false,
        title:"",
        content:"",
    }
        

    onDelete(){
        if(this.props.location.state.boardnum === 1){
            axios.delete('http://localhost:8000/api/'.concat(this.props.location.state.id, '/delete/$'));
            this.setState({
                deleted:true
            });
        }
        else{
            axios.delete('http://localhost:8000/api'.concat(this.props.location.state.boardnum,'/',this.props.location.state.id, '/delete/$'));
            this.setState({
                deleted:true
            });
        }
    }

    onUpdate() {
        this.setState({
            updated:true
        });
    }
    
    async componentDidMount() {
        if (this.props.location.state.boardnum === 1){
            console.log('detail1');
            await axios.get('http://localhost:8000/api/'.concat(this.props.location.state.id, '/$') ,)
            .then( res => {
                this.setState({
                    title : res.data.title,
                    content : res.data.content
                });
                console.log(res) } )
            .catch( error => { console.error(error) } );
            console.log(this.state.title);
            console.log(this.state.content);
        }else {
            console.log('detail2');
            await axios.get('http://localhost:8000/api'.concat(this.props.location.state.boardnum, '/', this.props.location.state.id, '/detail/$'), )
            .then( res => {
                this.setState({
                    title : res.data.title,
                    content : res.data.content
                });
                console.log(res) } )
            .catch( error => { console.error(error) } );
            console.log(1111);
            console.log(this.state.title);
            //console.log(this.state.content);
        }
    }

    render() {
        //console.log('render_detail');
        console.log(this.state.title);
        //console.log(this.state.content);
        const detailcontent = this.state.content.split(/[\r\n]/).map((partial, i) =>
            partial && <span key={i}>{partial}{i !== this.state.content.length - 1 && <br />}</span>
        )

        return (
            <div>
                {
                    this.state.deleted && <Redirect to={{
                        pathname:'/saved',  
                        state:{message:"삭제되었습니다",
                        num: this.props.location.state.boardnum                               
                        }
                    }}/>
                }
                {
                    this.state.updated && <Redirect to={{
                        pathname:'/update',
                        state:{id: this.props.location.state.id,
                            title: this.state.title,
                            content: this.state.content,
                            boardnum:this.props.location.state.boardnum
                        }
                    }}/>
                }
                
                <h1>detail</h1>

                <Segment className='tableplace'>
                    <h4 align='left'>title</h4>
                    <h2 align='left'>{this.state.title}</h2>

                    <Divider section />

                    <h4 align='left'>content</h4>
                    <h2 align='left'>{detailcontent}</h2>
                </Segment>

                <NavLink to={{
                        pathname: '/posts',
                        state: { 
                            num: this.props.location.state.boardnum
                        }
                    }}                    
                >
                    <Button >목록으로 돌아가기</Button>
                </NavLink>

                <Button onClick={function() {
                    this.onUpdate()
                }.bind(this)}>수정하기</Button>

                <Button onClick={function() {
                    this.onDelete()
                }.bind(this)}>삭제하기</Button>
            </div>
            
        );
    }
}

export default Detail;