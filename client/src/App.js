import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { ArticleList } from './components/articles/ArticleList';
import { Catergory } from './components/category/Catergory';
import Login from './components/auth/Login'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login />
      <Catergory />
      <ArticleList />
    </div>
  );
}

export default App;
