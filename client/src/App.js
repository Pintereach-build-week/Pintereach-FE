import React from 'react';
// import { Navbar } from './components/navbar/Navbar';
// import ArticleList from './components/articles/ArticleList';
import ArticleList2 from './components/articles/ArticleList2';
// import { Catergory } from './components/category/Catergory';
import Login from './components/auth/Login';
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav style={{ display: 'flex', justifyContent: 'space-evenly', alignItems:'center' }}>
        <h1 style={{ color: '#FF5733' }} className='header'>Pintereach</h1>
        <Link style={{ textDecoration:'none' }} to='/'>Home</Link>
        <Link style={{ textDecoration:'none' }} to='/login'>Log In</Link>
      </nav>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      
        <Route path="/">
          <ArticleList2 />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
