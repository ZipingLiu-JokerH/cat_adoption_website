import React from "react";

//components
import { Route, Switch } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Pages/Home";
import Donate from "./Pages/Donate";
import AvaliableCats from "./Pages/AvaliableCats";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/avaliable-cats">
          <AvaliableCats />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <div className="page_container">404 page</div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
