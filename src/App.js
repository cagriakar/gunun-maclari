import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FixtureProvider from "./data/FixtureContext";
import LoadingProvider from "./data/LoadingContext";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/routes/Home";
import MatchResultsScores from "./components/routes/MatchResultsScores";
import UpcomingMatches from "./components/routes/UpcomingMatches";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
        <FixtureProvider>
          <LoadingProvider>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route
                path="/canlisonuclar"
                exact
                component={MatchResultsScores}
              ></Route>
              <Route
                path="/fikstür-kalanmaclar"
                exact
                component={UpcomingMatches}
              ></Route>
            </Switch>
          </LoadingProvider>
        </FixtureProvider>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
