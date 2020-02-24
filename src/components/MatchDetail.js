import React from "react";
import HomeTeamDetail from "./HomeTeamDetail";
import AwayTeamDetail from "./AwayTeamDetail";

function MatchDetail({ match }) {
  return (
    <div className="match-detail">
      <HomeTeamDetail info={match.homeTeam}></HomeTeamDetail>
      <p>-</p>
      <AwayTeamDetail info={match.awayTeam}></AwayTeamDetail>
    </div>
  );
}

export default MatchDetail;
