import React from "react";

function HomeTeamDetail({ info }) {
  return (
    <>
      <div className="team">
        <img src={info.logo} alt={info.name}></img>
        <div className="team-name">
          <p>{info.name}</p>
        </div>
      </div>
      <p className="score">{info.score}</p>
    </>
  );
}

export default HomeTeamDetail;
