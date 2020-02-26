import React from "react";
import HomeTeamDetail from "./details/HomeTeamDetail";
import AwayTeamDetail from "./details/AwayTeamDetail";

function MatchDetail({ match }) {
  return (
    <div className="match-detail">
      <HomeTeamDetail control={match} info={match.homeTeam}></HomeTeamDetail>
      <p>-</p>
      <AwayTeamDetail control={match} info={match.awayTeam}></AwayTeamDetail>
    </div>
  );
}

export default MatchDetail;
