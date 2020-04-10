import React, { Component } from 'react';
import axios from 'axios'

class Client extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:''
        }

    }


    refreshNow=()=>{
        this.setState({
            name:'',
            email:''
        })
    }
    
    onChangeHandler=(event)=>{
        var myData = event.target.value;
        var request = event.target.name;

        this.setState({
            [request]:myData
        })
    }

    onSubmitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state);
        var data = this.state

        axios.post('http://localhost:8000/client/add',data)
        .then(request=>{
            console.log(request);
            this.refreshNow()
        })
        .catch(error=>{
            console.log(error);
            
        })
        
    }

    render() {
        return (
            <div>
                <h1>Client register</h1>
                <form method="post" onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <input onChange={this.onChangeHandler} style={{width:'30%',margin:'20px auto'}} className="form-control" name="name" placeholder="Enter name" type="text" required autoComplete="off"></input>
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChangeHandler} style={{width:'30%',margin:'20px auto'}} className="form-control" name="email" placeholder="Enter email" type="email" required autoComplete="off"></input>
                    </div>
                    <div className="form-group">
                        <input onClick={this.refreshNow} className="btn btn-dark" type="submit" value="save records"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Client;