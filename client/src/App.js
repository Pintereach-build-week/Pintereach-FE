import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { ArticleList } from './components/articles/ArticleList';
import { Catergory } from './components/category/Catergory';
import Register from './components/auth/Register'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Catergory />
      <ArticleList />
      <Register />
    </div>
  );
}

export default App;
