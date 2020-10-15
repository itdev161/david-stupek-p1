import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {
  state = {
    data: null
  }

componentDidMount(){
  axios.get('http://localhost:5000')
    .then((response) => {
      this.setState({
        data: response.data
      })
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    })
}

render() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Spooky Things Newsletter</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
      </header>
      <main>
        <Route exact path="/">
          {this.state.data}
        </Route>
        <Switch>
          <Route path="/register">
            Register
          </Route>
          <Route path="/login">
            Login
          </Route>
        </Switch>
      </main>
    </div>
   </Router> 
  );
 }
}
/*
class MyForm extends React.Component {
  state = {
    data: null
  }
}

render() {
    return (
          <div className="MyForm">
          <form>
            <h1>Enter your name</h1>
            <input type="text"/>
            <h1>Enter your email</h1>
            <input type="text"/>
            <h1>Enter your password</h1>
            <input type="text"/>
          </form>
          {this.state.data}
          </div>                   
    )
  }
*/

export default App;
