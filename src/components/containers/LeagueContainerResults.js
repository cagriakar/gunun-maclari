/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { FixtureContext } from "../../data/FixtureContext";
import { LoadingContext } from "../../data/LoadingContext";
import MatchCard from "./MatchCard";
import Placeholder from "../Placeholder";
import FadeIn from "react-fade-in";

function LeagueContainerResults() {
  // eslint-disable-next-line no-unused-vars
  const [fixture, setFixture] = useContext(FixtureContext);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useContext(LoadingContext);

  const today = new Date();

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
            {fixture.map(item => {
              return (
                <div key={item.leagueName} className="league-card">
                  <h2 className="league-name">{item.leagueName}</h2>
                  {item.matches.map((match, index) => {
                    const date = new Date(match.dateTime);
                    if (
                      date.getDate() === today.getDate() &&
                      match.databind !== undefined
                    ) {
                      console.log(match.databind);
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

export default LeagueContainerResults;
