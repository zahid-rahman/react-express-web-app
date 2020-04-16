import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from './pages/Client'
import ClientDelete from './pages/ClientDelete'
import ClientEdit from './pages/ClientEdit'
import './index.css';
import {Route , Link , BrowserRouter as Router} from '../node_modules/react-router-dom'
import ClientUpdate from './pages/ClientUpdate';


const router=(
  <div>
    <Router>
        <ul className="nav justify-content-center menubar">
          <Link to="/">Home</Link>
          <Link to="/client">Add client</Link>
          <Link to="/delete">Delete client</Link>
          <Link to="/edit">Edit client</Link>
        </ul>
        <br></br>
        <br></br>

        <Route exact path="/" component={App} ></Route>
        <Route path="/client" component={Client} ></Route>
        <Route path="/delete" component={ClientDelete} ></Route>
        <Route path="/edit" component={ClientEdit} ></Route>
        <Route path="/update/:id" component={ClientUpdate}></Route>

    </Router>
  </div>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
