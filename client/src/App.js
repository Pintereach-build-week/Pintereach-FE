import React from 'react';
import ArticleListHH  from './components/articles/ArticleListHH';
import Register  from './components/auth/Register';
import Login from './components/auth/Login'
import { Link, Route, Switch } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <div className="nav-bar" style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <h2>Pintereach</h2>
        <Link className="nav-link" to='/' style={{textDecoration: 'none', color: '#FF5733', fontFamily: 'Roboto'}}>Home</Link>
        <br/>
        <br/>
        <Link className="nav-link" to='/register' style={{textDecoration: 'none', color: '#FF5733'}}>Register Here</Link>
        <br/>
        <br/>
        <Link className="nav-link" to='/login' style={{textDecoration: 'none', color: '#FF5733'}}>Login</Link>
      </div>

      <Switch>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <ArticleListHH />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
