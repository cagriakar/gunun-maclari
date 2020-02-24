import React from "react";
import LeagueContainer from "./components/LeagueContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import FixtureProvider from "./data/FixtureContext";
import LoadingProvider from "./data/LoadingContext";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FixtureProvider>
        <LoadingProvider>
          <LeagueContainer></LeagueContainer>
        </LoadingProvider>
      </FixtureProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
