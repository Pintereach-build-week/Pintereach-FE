import React from 'react';
import ArticleListHH  from './components/articles/ArticleListHH';
import Register  from './components/auth/Register';
import { Link, Route, Switch } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Link className="nav-link" to='/' style={{textDecoration: 'none', color: 'black', fontFamily: 'Roboto'}}>Home</Link>
        <br/>
        <br/>
        <Link className="nav-link" to='/register' style={{textDecoration: 'none', color: 'black'}}>Register Here</Link>
      </div>

      <Switch>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/">
          <ArticleListHH />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
