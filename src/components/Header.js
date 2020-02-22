import React from "react";

function Header() {
  const year = new Date().getFullYear();
  const day = new Date().getDate();
  const month = new Date().getMonth();

  return (
    <div className="Header">
      <h1>GÜNÜN MAÇLARI</h1>
      <h2>{`${day} / ${month + 1} / ${year}`} </h2>
    </div>
  );
}

export default Header;
