import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { ArticleList } from './components/articles/ArticleList';
import { Catergory } from './components/category/Catergory';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Catergory />
      <ArticleList/>

    </div>
  );
}

export default App;
