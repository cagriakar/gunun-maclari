/* eslint-disable array-callback-return */
import React, { useContext, useState, useRef, useEffect } from "react";
import { FixtureContext } from "../../data/FixtureContext";
import MatchCard from "./MatchCard";
import Placeholder from "../Placeholder";
import FadeIn from "react-fade-in";

function LeagueContainer() {
  // eslint-disable-next-line no-unused-vars
  const [fixture, setFixture] = useContext(FixtureContext);
  const [loading, setLoading] = useState(true);
  const componentIsMounted = useRef(true);
  const today = new Date();

  useEffect(() => {
    if (componentIsMounted.current) {
      setTimeout(() => setLoading(false), 1000);
    }
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{ marginTop: "2rem", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      ) : (
        <FadeIn>
          <div className="leagues-container">
            {fixture.map(item => {
              return (
                <div key={item.leagueName} className="league-card">
                  <h2 className="league-name">{item.leagueName}</h2>
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
