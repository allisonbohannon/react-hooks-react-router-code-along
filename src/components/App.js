import React from "react";
import { Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About"
import Home from "./Home"
import Login from "./Login";
import Signup from "./Signup"
import Messages from "./Messages"


function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route> 
          <Route path="/Signup">
            <Signup />
          </Route> 
          <Route path="/messages">
            <Messages />
          </Route> 
  
        </Switch>
      </div>
    )
  }

export default App;
