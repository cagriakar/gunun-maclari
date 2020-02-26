import React from "react";

function AwayTeamDetail({ control, info }) {
  return (
    <>
      {control.databind !== undefined && <p className="score">{info.score}</p>}
      <div className="team">
        <img src={info.logo} alt={info.name}></img>
        <div className="team-name">
          <p>{info.name}</p>
        </div>
      </div>
    </>
  );
}

export default AwayTeamDetail;
