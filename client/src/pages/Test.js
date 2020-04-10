import React, { Component } from 'react';
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Test extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             apiResponse:[]
        }
    }
    
    apiData(){
        axios.get("http://localhost:8000/testApi")
        .then((request)=>{
            
            this.setState({
                apiResponse:request.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    componentDidMount(){
        this.apiData()
    }


    render() {

        const nameList = this.state.apiResponse.map((namelist)=>{
            return  <div className="card" style={{width: '18rem',margin:'10px auto'}}>
            <div className="card-body">
                <h1 className="card-title">{namelist.name}</h1>
                <h6 className="card-subtitle mb-2 text-muted">Age: {namelist.age}</h6>
                <p className="card-text">{namelist.desc}</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
            </div>

        }) 



        return (
            <div>
                
                {nameList}

            </div>




        );
    }
}

export default Test;