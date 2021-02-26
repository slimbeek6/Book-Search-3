import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Saved from "./pages/saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BookProvider } from "./utils/GlobalState";
import "./App.css";

function App() {
  return (
   <Router>
     <div>
        <BookProvider>
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </BookProvider>
     </div>
    </Router>
  );
}


export default App;
