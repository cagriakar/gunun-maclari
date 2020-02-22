import React, { useContext } from "react";
import MatchDetail from "./MatchDetail";
import { FixtureContext } from "../data/FixtureContext";

function MatchCard(props) {
  console.log(props);
  const [fixture, setFixture] = useContext(FixtureContext);

  return (
    <div className="match-row">
      {fixture.map(league =>
        league.matches.map(info => {
          return (
            <div>
              <p>{info.hour}</p>
              <MatchDetail></MatchDetail>
            </div>
          );
        })
      )}
      ;
    </div>
  );
}

export default MatchCard;
