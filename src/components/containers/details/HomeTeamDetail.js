import React from "react";

function HomeTeamDetail({ control, info }) {
  return (
    <>
      <div className="team">
        <img src={info.logo} alt={info.name}></img>
        <div className="team-name">
          <p>{info.name}</p>
        </div>
      </div>
      {control.databind !== undefined && <p className="score">{info.score}</p>}
    </>
  );
}

export default HomeTeamDetail;
