import React from "react";
import MainLogo from "../assets/cChick.png";

function Home() {
  return (
    <div className="home">
      <img src={MainLogo} alt="MainLogo" />
      <strong>
        <h1>Katakeet Ko.!</h1>
      </strong>
    </div>
  );
}

export default Home;
