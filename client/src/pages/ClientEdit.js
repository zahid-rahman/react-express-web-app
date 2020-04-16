import React, { Component } from 'react';
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ClientEdit extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            clientList:[],
        }
    }

    clientListEdit=()=>{
        axios.get("http://localhost:8000/client/clientList")
        .then((request)=>{
            this.setState({
                clientList:request.data
            })
        })
        .catch((error)=>{
            console.log(error);       
        })
    }

    clientUpdate(id){
        this.props.history.push("/update/"+id) 

    }

    componentDidMount(){
        this.clientListEdit()
    }
    

    render() {

        const clientList = this.state.clientList.map((dataList)=>{
            return <div className="col-lg-6 col-md-6 col-sm-12 col-123" key={dataList.id}>
            <div className="card text-center">
                <div className="card-body" >
                    <h4 className="card-title">{dataList.name}</h4>
                    <p className="card-text"> {dataList.email}</p>
                    {/* using hooks */}
                    <button onClick={()=>this.clientUpdate(dataList.id)} className="btn btn-primary">update</button> 
                </div>
                </div>
                <br></br>
           </div>
        })


        return (
            <div>
                <h1 className="text-center">Client Edit</h1>
                <div className="container">
                    <div className="row">
                        {clientList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientEdit;