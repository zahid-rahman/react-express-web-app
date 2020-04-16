import React, { Component } from 'react';
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ClientUpdate extends Component {

    constructor(props) {
        super(props)
        
      
        this.state = {
            clientDetails:[],
            name:'',
            email:''
        }
    }
    

    clientUpdateData(){
        var id = this.props.match.params.id
    

        axios.get("http://localhost:8000/client/edit/"+id)
        .then((request)=>{
            this.setState({
                clientDetails:request.data
            })

            console.log(this.state.clientDetails);

        })
        .catch((error)=>{
            console.log(error);
            
        })

    }

    clientDataUpdate=(event)=>{
        var id = this.props.match.params.id


        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        var data = {
            name: name,
            email: email
        }
        
       
        axios.put("http://localhost:8000/client/update/"+id,data)
        .then((update)=>{
            console.log(update+'data updated');
            alert('client data updated')
            
        })
        .catch((error)=>{
            console.log(error);
            
        })
        
    }

    getValue=(event)=>{

        var name = event.target.name;
        var value = event.target.value;

        this.setState({
            [name]:value
        })
    }

  

    componentDidMount(event){
        this.clientUpdateData()
    }

    

    render() {

        const clientData = this.state.clientDetails.map((dataList)=>{           

            return <div key={dataList.id}>
            <h1 style={{width:'30%',margin:'20px auto',textAlign:'center'}}>Client update</h1>
            <form onSubmit={this.clientDataUpdate} >
                <div className="form-group">
                    <input id="name" onChange={this.getValue} style={{width:'30%',margin:'20px auto'}}  defaultValue={dataList.name} className="form-control" name="name" placeholder="Enter name" type="text"></input>
                </div>
                <div className="form-group">
                    <input id="email" onChange={this.getValue} style={{width:'30%',margin:'20px auto'}} defaultValue={dataList.email} className="form-control" name="email" placeholder="Enter email" type="email" ></input>
                </div>
                <div className="form-group">
                    <input style={{width:'30%',margin:'20px auto',background:'#007bff',color:'#fff'}} className="form-control App-submit-button" type="submit" value="update"></input>
                </div>
            </form>
            </div>
        })

        return (
            <div>
                {clientData}
            </div>
        );
    }
}

export default ClientUpdate;