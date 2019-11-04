import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './Place.css';
class Poststable extends Component{
    
    state = {
        id:null,
        persons: [],
        reversed_persons:[],
        activePage:1,
        start:0,
        end:10,
        detailcalled:false
    }
    
    onHandleUp(){
        const {start,end,activePage}=this.state;
        if (end < this.state.persons.length/10*10) {
            this.setState({
                start:start+10,
                end:end+10,
                activePage:activePage+1
            });
        }
    }

    onHandleDown(){
        const {start,end,activePage}=this.state;
        if(start===0) return;
        this.setState({
            start:start-10,
            end:end-10,
            activePage:activePage-1
        });
    }

    async componentDidMount() {
        if (this.props.boardnum === 1){
            axios.get('http://127.0.0.1:8000/api')
            .then(res => {
                const p = res.data;
                this.setState({ persons:p });
                const v=this.state.persons.reverse();
                this.setState({
                    persons:v
                });
            });
        }else {
            axios.get('http://127.0.0.1:8000/api'.concat(this.props.boardnum))
            .then(res => {
                const p = res.data;
                this.setState({ persons:p });
                const v=this.state.persons.reverse();
                this.setState({
                    persons:v
                });
            });
        }
    }
    
    render() {
        
        const array=this.state.persons.slice(this.state.start,this.state.end);
        const listtable = array.map( (a) => 
            (
                <Table.Row >
                    <Table.Cell width='10'>
                        <NavLink onClick={function(e){
                            e.preventDefault();
                            this.setState({
                                detailcalled:true,
                                id:a.id
                            });
                            }.bind(this)} >
                            {a.title}
                        </NavLink>
                    </Table.Cell>
                    <Table.Cell width='10'>
                        
                    </Table.Cell>
                    <Table.Cell  collapsing='true' textAlign='middle'>
                        {a.date}
                    </Table.Cell>
                </Table.Row>
            )
        );
        return(
            <div className="place1">
                {
                    this.state.detailcalled===true && 
                    <Redirect to={{
                        pathname: '/detail',
                        state: { 
                            id: this.state.id,
                            boardnum: this.props.boardnum
                        }
                    }}
                    />
                }

                <div className="tableplace">
                    <Table celled striped >
                        <Table.Header>
                        <Table.Row >
                            <Table.HeaderCell colSpan='5'>글 목록</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {listtable}
                        </Table.Body>
                    </Table>
                </div>
                <div >
                    <Button onClick={function() {
                        this.onHandleDown()
                    }.bind(this)}>
                        <Icon name='chevron left' />
                    </Button>
                    <Button onClick={function() {
                        this.onHandleUp()
                    }.bind(this)}>
                        <Icon name='chevron right' />
                    </Button>
                </div>
            </div>
        );
    }
}

export default Poststable;