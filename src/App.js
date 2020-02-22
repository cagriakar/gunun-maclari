import React from "react";
import LeagueContainer from "./components/LeagueContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import FixtureProvider from "./data/FixtureContext";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FixtureProvider>
        <LeagueContainer></LeagueContainer>
      </FixtureProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
