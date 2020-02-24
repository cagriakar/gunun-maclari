/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { FixtureContext } from "../data/FixtureContext";
import { LoadingContext } from "../data/LoadingContext";
import MatchCard from "./MatchCard";
import Placeholder from "./Placeholder";
import FadeIn from "react-fade-in";

function LeagueContainer() {
  // eslint-disable-next-line no-unused-vars
  const [fixture, setFixture] = useContext(FixtureContext);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useContext(LoadingContext);

  const today = new Date();
  const filtered = fixture.filter(item =>
    item.matches.some(
      match => Number(match.dateTime.slice(8, 10)) === today.getDate()
    )
  );

  return (
    <>
      {loading ? (
        <>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </>
      ) : (
        <FadeIn>
          <div className="leagues-container">
            {filtered.map(item => {
              return (
                <div key={item.leagueName} className="league-card">
                  <h2>{item.leagueName}</h2>
                  {item.matches.map((match, index) => {
                    const date = new Date(match.dateTime);
                    if (date.getDate() === today.getDate()) {
                      return <MatchCard key={index} match={match}></MatchCard>;
                    }
                  })}
                </div>
              );
            })}
          </div>
        </FadeIn>
      )}
    </>
  );
}

export default LeagueContainer;
