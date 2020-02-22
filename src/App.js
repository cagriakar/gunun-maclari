import React from "react";
import LeagueContainer from "./components/LeagueContainer";
import Footer from "./components/Footer";
import "./App.css";
import FixtureProvider from "./data/FixtureContext";

function App() {
  return (
    <div className="App">
      <FixtureProvider>
        <LeagueContainer></LeagueContainer>
      </FixtureProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
