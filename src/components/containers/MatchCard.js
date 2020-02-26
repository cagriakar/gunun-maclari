import React from "react";
import MatchDetail from "./MatchDetail";

function MatchCard({ match }) {
  return (
    <div className="match-row">
      <p className="match-hour">
        {match.databind === undefined ? match.hour : match.databind}
      </p>
      <MatchDetail match={match}></MatchDetail>
      <p className="match-additionalinfo">{match.additionalInfo}</p>
    </div>
  );
}

export default MatchCard;
