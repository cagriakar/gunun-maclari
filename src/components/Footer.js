import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <footer>
        <p>RCA, Copyright ⓒ {year}</p>
        <p>Matches are pulled from goal.com </p>
      </footer>
    </div>
  );
}

export default Footer;
