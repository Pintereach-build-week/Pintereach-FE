import React from "react"

// Components
import { Navbar } from "./components/navbar/Navbar"
// import Home from './components/layout/Home'
import Home from "./components/layout/Home";
import FormikLogin from "./components/auth/Login"
import FormikRegister from './components/auth/Register'


//Routing
// import PrivateRoute from './utils/PrivateRoute'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"

function App() {


  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          {/*---Public Routes---*/}
          <Route path="/login" component={FormikLogin} />
          <Route path="/register" component={FormikRegister} />

          {/*---Private Routes---*/}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
