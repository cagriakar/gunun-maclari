import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { FixtureContext } from "../data/FixtureContext";

function MatchDetail(props) {
  const [fixture, setFixture] = useContext(FixtureContext);

  return (
    <div className="match-detail">
      <p>HomeTeam</p>
      <p>HomeTeamScore</p>
      <p>-</p>
      <p>AwayTeamScore</p>
      <p>AwayTeam</p>
    </div>
  );
}

export default MatchDetail;
