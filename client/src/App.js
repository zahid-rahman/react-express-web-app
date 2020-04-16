import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       clientData:[]
    }
  }

  clientListData(){

    axios.get("http://localhost:8000/client/clientList")
    .then((dataList)=>{
      this.setState({
         clientData:dataList.data
      })
    })
    .catch((error)=>{
      console.log(error);
    });

  }



  componentDidMount(){
    this.clientListData()
  }
  
  render(){


    const clientList = this.state.clientData.map((data)=>{
      return <div className="col-lg-3 col-md-4 col-sm-12" key={data.id}>
              <div className="card text-center">
                <div className="card-body">
                  <h4 className="card-title">{data.name}</h4>
                  <p className="card-text"> {data.email}</p>
                </div>
              </div>
            <br></br>
        </div>
      
            
    })

    return (
      <React.Fragment>
        <div className="App">
          <h1>Client List</h1>
          <br></br>

          <div className="container">
            <div className="row">
              {clientList}
            </div>
          </div>

      </div>
      </React.Fragment>
      
    );
  }
}

export default App;
