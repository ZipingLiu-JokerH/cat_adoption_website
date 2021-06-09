import React from "react";

//components
import { Route, Switch } from "react-router-dom";
import { CatsContextProvider } from "./CatsContext";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Pages/Home";
import Donate from "./Pages/Donate";
import AvaliableCats from "./Pages/AvaliableCats";
import SingleCat from "./Pages/SingleCat";
import AdoptionProcess from "./Pages/AdoptionProcsss";

function App() {
  return (
    <div className="App">
      <Header />
      <CatsContextProvider />
      <Switch>
        <Route path="/adoption-process/:name">
          <AdoptionProcess />
        </Route>
        <Route path="/single-cat/:name">
          <SingleCat />
        </Route>
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
      <CatsContextProvider />
      <Footer />
    </div>
  );
}

export default App;
