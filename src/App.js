import React, { Suspense } from "react";

//components
import { Route, Switch } from "react-router-dom";
import { CatsContextProvider } from "./CatsContext";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Pages/Home";

const Donate = React.lazy(() => import("./Pages/Donate"));
const AvaliableCats = React.lazy(() => import("./Pages/AvaliableCats"));
const SingleCat = React.lazy(() => import("./Pages/SingleCat"));
const AdoptionProcess = React.lazy(() => import("./Pages/AdoptionProcsss"));

function App() {
  return (
    <div className="App">
      <Header />
      <CatsContextProvider>
        <Suspense fallback={<div className="page_container">Loading...</div>}>
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
        </Suspense>
      </CatsContextProvider>
      <Footer />
    </div>
  );
}

export default App;
