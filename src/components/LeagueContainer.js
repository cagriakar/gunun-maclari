/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { FixtureContext } from "../data/FixtureContext";

function LeagueContainer() {
  // eslint-disable-next-line no-unused-vars
  const [fixture, setFixture] = useContext(FixtureContext);
  const today = new Date();
  return (
    <div className="leagues-container">
      {fixture.map(item => {
        if (item.matches.length !== 0) {
          return (
            <div key={item.leagueName} className="league-card">
              <h2>{item.leagueName}</h2>
              {item.matches.map((match, index) => {
                let date = new Date(match.dateTime);
                if (date.getDate() === today.getDate()) {
                  return (
                    <div key={index} className="match-row">
                      <p className="match-hour">
                        {match.databind === undefined
                          ? match.hour
                          : match.databind}
                      </p>
                      <div className="match-detail">
                        <div className="team">
                          <img
                            src={match.homeTeam.logo}
                            alt={match.homeTeam.name}
                          ></img>
                          <div className="team-name">
                            <p>{match.homeTeam.name}</p>
                          </div>
                        </div>
                        <p className="score">{match.homeTeam.score}</p>
                        <p>-</p>
                        <p className="score">{match.awayTeam.score}</p>
                        <div className="team">
                          <img
                            src={match.awayTeam.logo}
                            alt={match.awayTeam.name}
                          ></img>
                          <div className="team-name">
                            <p>{match.awayTeam.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          );
        }
      })}
    </div>
  );
}

export default LeagueContainer;
