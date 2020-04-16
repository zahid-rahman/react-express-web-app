import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

class ClientDelete extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            clientList:[] 
        }
    }

  

    clientListData(){
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

    componentDidMount(){
        this.clientListData()
    }

    ClientDelete(id){
        console.log("id:"+id);

        axios.delete("http://localhost:8000/client/delete/"+id)
        .then((deleteClient)=>{
            console.log('client Deleted'); 
            alert('client deleted')
            this.props.history.push("/") 
        })
        .catch((error)=>{   
            console.log(error);            
        }) 
    }

    
    render() {

        const clientList = this.state.clientList.map((dataList)=>{
            return  <div className="col-lg-6 col-md-6 col-sm-12 col-123" key={dataList.id}>
                        <div className="card text-center">
                            <div className="card-body" >
                                <h4 className="card-title">{dataList.name}</h4>
                                <p className="card-text"> {dataList.email}</p>
                                {/* using hooks */}
                                <button onClick={()=>this.ClientDelete(dataList.id)} className="btn btn-danger">delete</button> 
                            </div>
                            </div>
                            <br></br>
                       </div>
                  
        })

        return (
            <div>
                <h1 className="text-center">Client Delete</h1>
                <div className="container">
                    <div className="row">
                        {clientList}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientDelete;